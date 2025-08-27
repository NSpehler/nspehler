import requests

from datetime import datetime
from typing import Dict, List, Optional

from utils.database import database
from utils.slack import Slack

STORES = [
    {
        "name": "RAYE",
        "url": "https://ukshop.rayeofficial.com/products.json?limit=1000",
        "collection": "raye_uk",
        "flag": ":flag-gb:",
        "country": "UK",
        "product_type": "vinyl"
    },
    {
        "name": "RAYE", 
        "url": "https://raye-store-eu.myshopify.com/products.json?limit=1000",
        "collection": "raye_eu",
        "flag": ":flag-eu:",
        "country": "EU",
        "product_type": "vinyl"
    },
    {
        "name": "RAYE",
        "url": "https://usshop.rayeofficial.com/products.json?limit=1000", 
        "collection": "raye_us",
        "flag": ":flag-us:",
        "country": "US",
        "product_type": "vinyl"
    },
    {
        "name": "Fred again..",
        "url": "https://shop.fredagain.com/products.json?limit=1000",
        "collection": "fred_again",
        "flag": ":flag-gb:",
        "country": "UK",
        "product_type": "media"
    }
]


def lambda_handler(event, context):    
    for store in STORES:
        try:
            print(f"Processing {store['name']} ({store['country']})...")
            
            # Fetch products from the store
            products_data = fetch_products(url=store["url"])
            
            if not products_data:
                print(f"Failed to fetch products from {store['name']}")
                continue
            
            # Filter products by the specified product type
            filtered_products = filter_products_by_type(
                products=products_data.get("products", []), 
                product_type=store["product_type"]
            )
            print(f"Found {len(filtered_products)} {store['product_type']} products in {store['name']}")
            
            # Process each product
            for product in filtered_products:
                process_product(product=product, store=store)
                
        except Exception as e:
            print(f"Error processing {store['name']}: {str(e)}")
    
    print("Shopify products monitoring completed")
    return True


def fetch_products(url: str) -> Optional[Dict]:
    """Fetch products from a Shopify store URL"""
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching products from {url}: {str(e)}")
        return None


def filter_products_by_type(products: List[Dict], product_type: str) -> List[Dict]:
    """Filter products by the specified product type"""
    filtered_products = []
    
    for product in products:
        if product.get("product_type", "").lower() == product_type.lower():
            filtered_products.append(product)
    
    return filtered_products


@database
def process_product(product: Dict, store: Dict) -> None:
    """Process a single product and check if it's new"""
    product_id = product.get("id")
    if not product_id:
        print("Product missing ID, skipping...")
        return
    
    collection_name = store["collection"]
    collection = getattr(database, collection_name)
    
    # Check if product already exists in database
    existing_product = collection.find_one({"_id": product_id})
    
    if existing_product:
        # Product exists, check for availability changes
        check_availability_changes(product=product, existing_product=existing_product, store=store)
        
        # Update the product in database
        update_product_in_db(product=product, collection=collection)
    else:
        # New product detected
        print(f"New {store['product_type']} product detected: {product.get('title')} in {store['name']}")
        
        # Add to database
        add_product_to_db(product=product, collection=collection)
        
        # Send Slack notification for new product
        send_new_product_notification(product=product, store=store)


def check_availability_changes(product: Dict, existing_product: Dict, store: Dict) -> None:
    """Check if product availability has changed and send notification if needed"""
    current_available = is_product_available(product=product)
    previous_available = existing_product.get("available", False)
    
    # If product became available (was unavailable, now available)
    if current_available and not previous_available:
        print(f"Product became available: {product.get('title')} in {store['name']}")
        send_availability_notification(product=product, store=store)


def is_product_available(product: Dict) -> bool:
    """Check if any variant of the product is available"""
    variants = product.get("variants", [])
    return any(variant.get("available", False) for variant in variants)


def add_product_to_db(product: Dict, collection) -> None:
    """Add a new product to the database"""
    product_data = {
        **product,
        "_id": product.get("id"),
        "available": is_product_available(product=product),
        "first_seen": datetime.utcnow(),
        "last_checked": datetime.utcnow()
    }
    
    collection.insert_one(product_data)
    print(f"Added product to database: {product.get('title')}")


def update_product_in_db(product: Dict, collection) -> None:
    """Update an existing product in the database"""
    update_data = {
        **product,
        "available": is_product_available(product=product),
        "last_checked": datetime.utcnow()
    }
    
    query = {"_id": product.get("id")}
    values = {"$set": update_data}
    collection.update_one(query, values)


def get_product_price(product: Dict) -> Optional[str]:
    """Get the price of the first available variant"""
    variants = product.get("variants", [])
    if variants:
        return variants[0].get("price")
    return None


def get_product_url(product: Dict, store: Dict) -> str:
    """Generate the product URL based on store and product handle"""
    base_url = store["url"].split("/products.json")[0]
    handle = product.get("handle", "")
    return f"{base_url}/products/{handle}"


def send_new_product_notification(product: Dict, store: Dict) -> None:
    """Send Slack notification for new product"""
    try:
        slack = Slack()
        
        product_title = product.get("title")
        product_url = get_product_url(product=product, store=store)
        available = is_product_available(product=product)
        flag = store["flag"]
        name = store["name"]
        
        header = f"{flag} New {name} vinyl release"
        availability_text = "✅ Available" if available else "❌ Sold Out"
        
        message = f"*{product_title}*\n{availability_text}"
        
        slack.blocks = []
        slack.header(header)
        slack.body(message)
        
        slack.blocks.append({
            "type": "actions",
            "elements": [{
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "View Product",
                    "emoji": True,
                },
                "url": product_url,
                "style": "primary",
            }]
        })
        
        slack.send()
        print(f"Sent new product notification for: {product_title}")
        
    except Exception as e:
        print(f"Error sending new product notification: {str(e)}")


def send_availability_notification(product: Dict, store: Dict) -> None:
    """Send Slack notification when product becomes available"""
    try:
        slack = Slack()
        
        product_title = product.get("title")
        product_url = get_product_url(product=product, store=store)
        flag = store["flag"]
        name = store["name"]
        product_type = store["product_type"]
        
        header = f"{flag} {name} {product_type} back in stock"
        message = f"*{product_title}*\n🔥 Now available!"
        
        slack.blocks = []
        slack.header(header)
        slack.body(message)
        
        slack.blocks.append({
            "type": "actions", 
            "elements": [{
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Buy Now",
                    "emoji": True,
                },
                "url": product_url,
                "style": "primary",
            }]
        })
        
        slack.send()
        print(f"Sent availability notification for: {product_title}")
        
    except Exception as e:
        print(f"Error sending availability notification: {str(e)}")
