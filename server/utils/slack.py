import os
import json
import requests

from dataclasses import dataclass, field
from typing import List, Dict


@dataclass
class Slack:
    url: str = os.environ["SLACK_WEBHOOK_URL"]
    blocks: List[Dict] = field(default_factory=list)

    def send(self):
        r = requests.post(
            url=self.url,
            json={
                "blocks": json.dumps(self.blocks),
            },
        )
        print(f"Slack API response: {r.text}")

    def header(self, text: str):
        self.blocks.append(
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": text,
                    "emoji": True,
                },
            }
        )

    def body(self, text: str):
        self.blocks.append(
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": text,
                },
            }
        )

    def send_message(self, header: str, message: str):
        self.header(header)
        self.body(message)
        self.send()

    def send_product_alert(self, name: str, url: str):
        self.blocks = []
        self.header(f"🚨 {name}")

        self.body(f"Product is back in stock!")

        self.blocks.append(
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "View product",
                            "emoji": True,
                        },
                        "url": url,
                        "style": "primary",
                    }
                ],
            }
        )

        self.send()

    def send_tracking_alert(self, tracking_number: str, label: str, latest_event: dict, cta: str = None, url: str = None):
        self.blocks = []
        self.header(f"📦 {label} - {tracking_number}")

        self.body(f"*New tracking update:*\n🕐 {latest_event['date']}\n📍 {latest_event['description']}")

        if cta and url:
            self.blocks.append(
                {
                    "type": "actions",
                    "elements": [
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": cta,
                                "emoji": True,
                            },
                            "url": url,
                            "style": "primary",
                        }
                    ],
                }
            )

        self.send()

    def send_domain_alert(self, domain: str):
        self.blocks = []
        self.header(f"🌐 {domain}")

        self.body(f"The domain *{domain}* is now available!")

        self.blocks.append(
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Register domain",
                            "emoji": True,
                        },
                        "url": os.environ["CLOUDFLARE_DOMAIN_REGISTRATION_URL"],
                        "style": "primary",
                    }
                ],
            }
        )

        self.send()
