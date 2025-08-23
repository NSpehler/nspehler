import re
import requests

from datetime import datetime
from bs4 import BeautifulSoup

from utils.database import database
from utils.slack import Slack


def lambda_handler(event, context):
    packages = get_packages()
    
    if not packages:
        print("No tracking packages found in database")
        return False
    
    for package in packages:
        tracking_number = package["tracking_number"]
        label = package["label"]
        
        print(f"[{tracking_number}] Checking tracking status for {label}...")
        
        try:
            # Get current tracking data
            tracking_data = get_tracking_data(tracking_number=tracking_number)
            
            if tracking_data:
                # Check for updates and send notifications if needed
                has_updates = check_and_update_tracking(
                    tracking_number=tracking_number,
                    label=label,
                    new_tracking_data=tracking_data
                )
                
                if has_updates:
                    print(f"[{tracking_number}] New tracking events found for {label}")
                else:
                    print(f"[{tracking_number}] No new tracking events for {label}")
            else:
                print(f"[{tracking_number}] Failed to get tracking data for {label}")
                
        except Exception as e:
            print(f"[{tracking_number}] Error processing tracking for {label}: {str(e)}")
    
    return True


@database
def get_packages() -> list:
    """Get POS Indonesia packages from database"""
    return list(database.pos_indonesia.find())


def get_tracking_data(tracking_number: str) -> dict:
    """Get tracking data from POS Indonesia website"""
    session = requests.Session()
    
    try:
        # Get cookies and CSRF token
        print(f"[{tracking_number}] Getting CSRF token...")
        response = session.get("https://ems.posindonesia.co.id/language-switch?language=en")
        response.raise_for_status()
        
        # Parse CSRF token from meta tag
        soup = BeautifulSoup(response.text, "html.parser")
        csrf_meta = soup.find("meta", {"name": "csrf-token"})
        
        if not csrf_meta:
            print(f"[{tracking_number}] CSRF token not found")
            return None
            
        csrf_token = csrf_meta.get("content")
        print(f"[{tracking_number}] CSRF token found: {csrf_token[:10]}...")
        
        # Fetch tracking number
        print(f"[{tracking_number}] Submitting tracking request...")
        headers = {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-csrf-token": csrf_token,
            "x-requested-with": "XMLHttpRequest"
        }
        
        data = {
            "barcode": tracking_number
        }
        
        track_response = session.post(
            "https://ems.posindonesia.co.id/track",
            headers=headers,
            data=data
        )
        track_response.raise_for_status()
        
        # Parse tracking information from response
        tracking_events = parse_tracking_response(track_response.text, tracking_number)
        
        return {
            "tracking_number": tracking_number,
            "events": tracking_events,
            "updated_at": datetime.utcnow()
        }
        
    except Exception as e:
        print(f"[{tracking_number}] Error getting tracking data: {str(e)}")
        return None


def parse_tracking_response(html_content: str, tracking_number: str):
    """Parse tracking events from HTML response"""
    soup = BeautifulSoup(html_content, "html.parser")
    events = []
    
    # Find all tracking items
    tracking_items = soup.find_all("div", class_="tracking-item")
    
    for item in tracking_items:
        try:
            # Extract date and time
            date_elem = item.find("div", class_="tracking-date")
            if date_elem:
                date_text = date_elem.get_text(strip=True)
                # Parse date like "2025-08-04 08:31" 
                date_match = re.search(r"(\d{4}-\d{2}-\d{2})\s*(\d{2}:\d{2})", date_text)
                if date_match:
                    date_str = f"{date_match.group(1)} {date_match.group(2)}"
                else:
                    date_str = date_text
            else:
                date_str = ""
            
            # Extract tracking content
            content_elem = item.find("div", class_="tracking-content")
            if content_elem:
                # Get the text content, excluding nested links
                content_text = content_elem.get_text(separator=" ", strip=True)
                # Remove barcode line if present
                content_text = re.sub(r"Barcode\s*:\s*\w+\s*", "", content_text).strip()
            else:
                content_text = ""
            
            # Extract status class for event type
            status_elem = item.find("div", class_=re.compile(r"tracking-icon"))
            status = ""
            if status_elem:
                classes = status_elem.get("class", [])
                for cls in classes:
                    if "status-" in cls:
                        status = cls
                        break
            
            if date_str and content_text:
                event = {
                    "date": date_str,
                    "description": content_text,
                    "status": status,
                    "timestamp": datetime.utcnow()
                }
                events.append(event)
                
        except Exception as e:
            print(f"[{tracking_number}] Error parsing tracking item: {str(e)}")
            continue
    
    # Sort events by date (newest first)
    events.sort(key=lambda x: x["date"], reverse=True)
    
    print(f"[{tracking_number}] Parsed {len(events)} tracking events")
    return events


@database
def check_and_update_tracking(tracking_number: str, label: str, new_tracking_data: dict):
    """Check for updates and store in database, send notifications if needed"""
    
    # Get existing tracking data from database
    query = {
        "_id": tracking_number
    }
    existing_doc = database.pos_indonesia_events.find_one(query)
    
    has_new_events = False
    should_update_db = False
    
    if existing_doc:
        # Package is already being tracked
        existing_events = existing_doc.get("events", [])
        new_events = new_tracking_data["events"]
        
        # If we got 0 events from the website, don't update the database
        # This prevents clearing the database when the website temporarily returns empty results
        if not new_events:
            print(f"[{tracking_number}] Website returned 0 events, keeping existing data")
            return False
        
        # Compare events to find new ones
        existing_signatures = set()
        for event in existing_events:
            signature = f"{event['date']}:{event['description']}"
            existing_signatures.add(signature)
        
        # Find new events
        new_event_list = []
        for event in new_events:
            signature = f"{event['date']}:{event['description']}"
            if signature not in existing_signatures:
                new_event_list.append(event)
                has_new_events = True
        
        if has_new_events:
            print(f"[{tracking_number}] Found {len(new_event_list)} new events")
            # Send Slack notification for new events
            send_tracking_notification(tracking_number, label, new_event_list)
            should_update_db = True
        elif len(new_events) >= len(existing_events):
            # Update DB if we have same or more events (no data loss)
            should_update_db = True
    else:
        # First time tracking this package
        print(f"[{tracking_number}] First time tracking package for {label}")
        
        # Always update DB for first time, even if 0 events
        should_update_db = True
        
        # Send initial notification only if we have events
        if new_tracking_data["events"]:
            has_new_events = True
            send_tracking_notification(tracking_number, label, [new_tracking_data["events"][0]])
    
    # Update database only when appropriate
    if should_update_db:
        update_data = {
            "_id": tracking_number,
            "label": label,
            "events": new_tracking_data["events"],
            "updated_at": new_tracking_data["updated_at"]
        }
        
        query = {
            "_id": tracking_number
        }
        database.pos_indonesia_events.replace_one(
            query,
            update_data,
            upsert=True
        )
    
    return has_new_events


def get_tracking_link(tracking_number: str, description: str) -> dict:
    """Get URL and button text based on tracking event description"""
    if "Item returned from customs" in description:
        return {
            "cta": "Pay import fees",
            "url": f"https://va.posindonesia.co.id/?c={tracking_number}",
        }
    else:
        return {
            "cta": "Track package",
            "url": f"https://www.posindonesia.co.id/en/tracking/{tracking_number}",
        }


def send_tracking_notification(tracking_number: str, label: str, new_events: list) -> None:
    """Send Slack notification for new tracking events"""
    try:
        slack = Slack()
        
        # Get the latest event for the notification
        latest_event = new_events[0] if new_events else None
        
        if latest_event:
            link = get_tracking_link(
                tracking_number=tracking_number,
                description=latest_event['description']
            )
            
            slack.send_tracking_alert(
                tracking_number=tracking_number, 
                label=label, 
                latest_event=latest_event,
                cta=link["cta"],
                url=link["url"]
            )
            print(f"[{tracking_number}] Slack notification sent for {label}")
            
    except Exception as e:
        print(f"[{tracking_number}] Error sending Slack notification: {str(e)}")