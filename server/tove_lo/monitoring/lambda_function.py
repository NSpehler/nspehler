import requests

from utils.slack import Slack

products = [
    {
        "name": "Tove Lo - Queen of the Clouds",
        "url": "https://shop.tove-lo.com/products/queen-of-the-clouds-x-deluxe-vinyl-tlo.json",
    }
]


def lambda_handler(event, context):
    for product in products:
        print(f"[{product['name']}] Checking availability...")
        is_available = check_product_availability(url=product["url"])

        if is_available:
            print(f"[{product['name']}] Product is available!")
            slack = Slack()
            slack.send_product_alert(
                name=product["name"], url=product["url"].replace(".json", "")
            )
        else:
            print(f"[{product['name']}] Product is not available")

    return True


def check_product_availability(url):
    try:
        response = requests.get(url)
        if response.status_code == 404:
            return False
        else:
            return True
    except Exception as e:
        print(f"[{url}] Error checking product availability: {str(e)}")
        return False
