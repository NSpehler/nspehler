import os
import json
import requests

from dataclasses import dataclass, field
from typing import List, Dict


@dataclass
class Slack:
    channel: str = "#offtherecord"
    username: str = "Off The Record"
    url: str = os.environ["SLACK_WEBHOOK_URL"]
    blocks: List[Dict] = field(default_factory=list)

    def send(self):
        r = requests.post(
            url=self.url,
            json={
                "channel": self.channel,
                "username": self.username,
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
