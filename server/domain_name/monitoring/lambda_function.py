import boto3

from botocore.exceptions import BotoCoreError, ClientError
from utils.slack import Slack

client = boto3.client("route53domains")

domains = ["dayiv.com"]


def lambda_handler(event, context):
    for domain in domains:
        print(f"[{domain}] Checking availability...")
        is_available = check_domain_availability(domain=domain)

        if is_available:
            print(f"[{domain}] Domain name is available!")
            slack = Slack(channel="#domains", username="Domain Monitor")
            slack.send_domain_alert(domain=domain)
        else:
            print(f"[{domain}] Domain name is not available yet")

    return True


def check_domain_availability(domain):
    try:
        response = client.check_domain_availability(DomainName=domain)
        status = response["Availability"]
        print(f"[{domain}] Domain status: {status}")

        return status == "AVAILABLE"

    except ClientError as e:
        print(f"[{domain}] An error occurred: {e.response['Error']['Message']}")
        return False
    except BotoCoreError as e:
        print(f"[{domain}] A BotoCore error occurred: {str(e)}")
        return False
