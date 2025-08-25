import requests

from bs4 import BeautifulSoup

from utils.slack import Slack

products = [
    {
        "name": "RAYE - My 21st Century Symphony",
        "url": "https://raye-merch.myshopify.com/products/my-21st-century-blues-my-21st-century-symphony-with-the-heritage-orchestra-live-at-the-royal-albert-hall-2xlp-red",
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

        add_to_cart_button = soup.find("button", {"name": "add", "type": "submit"})
        if add_to_cart_button:
            is_disabled = add_to_cart_button.has_attr("disabled")
            button_text = add_to_cart_button.find("span").text.strip().lower()

            if not is_disabled and button_text == "add to cart":
                return True
            elif is_disabled and button_text == "sold out":
                return False
            else:
                print(
                    f"Unexpected button state: disabled={is_disabled}, text='{button_text}'"
                )
                return False
        else:
            print(f"[{url}] Add to cart button not found")
            return False
    except Exception as e:
        print(f"[{url}] Error checking product availability: {str(e)}")
        return False
