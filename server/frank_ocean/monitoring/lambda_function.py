import requests

from bs4 import BeautifulSoup

from utils.slack import Slack

products = [
    {
        "name": "Frank Ocean - Channel Orange",
        "url": "https://blonded.co/products/channel-orange",
    }
]


def lambda_handler(event, context):
    for product in products:
        print(f"[{product['name']}] Checking availability...")
        is_available = check_product_availability(url=product["url"])

        if is_available:
            print(f"[{product['name']}] Product is back in stock!")
            slack = Slack()
            slack.send_product_alert(name=product["name"], url=product["url"])
        else:
            print(f"[{product['name']}] Product is still out of stock")

    return True


def check_product_availability(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")

        # Find the product info container
        product_info_container = soup.find("div", class_="product__info-container")
        if not product_info_container:
            print(f"[{url}] Product info container not found")
            return False

        # Check if "Sold Out" text is present in the container
        sold_out_element = product_info_container.find("div", class_="sold-out")
        if sold_out_element:
            sold_out_text = sold_out_element.get_text(strip=True).lower()
            if "sold out" in sold_out_text:
                return False
        
        # If we don't find "Sold Out", the product might be available
        # Let's also check for any button that might indicate availability
        buttons = product_info_container.find_all("button")
        for button in buttons:
            button_text = button.get_text(strip=True).lower()
            if "add to cart" in button_text or "buy now" in button_text:
                # Check if button is not disabled
                if not button.get("disabled"):
                    return True
        
        # If no clear availability indicators found, assume still sold out
        return False
        
    except Exception as e:
        print(f"[{url}] Error checking product availability: {str(e)}")
        return False
