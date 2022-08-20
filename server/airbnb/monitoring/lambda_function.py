import os
import json
import time
import cloudscraper

from retrying import retry
from pymongo import UpdateOne
from bson.objectid import ObjectId

from utils.database import database


def lambda_handler(event, context):
    searches = get_searches()
    for search in searches:
        print(f"[{search['_id']}] Get listings")
        listings = get_listings(search_id=search["_id"], variables=search["variables"])
        
        print(f"[{search['_id']}] Found {len(listings)} listings")
        upsert_listings(search_id=search["_id"], listings=listings)
    
    return True


@database
def get_searches():
    """Get Airbnb searches from database"""
    return list(database.airbnb_searches.find())


@database
def upsert_listings(search_id: ObjectId, listings: list = []):
    """Upsert Airbnb listings in database"""
    operations = []
    for listing in listings:
        query = {
            "_id": listing["listing"]["id"],
            "search_id": search_id,
        }

        values = {
            "$set": listing
        }

        operations.append(UpdateOne(query, values, upsert=True))

    if len(operations):
        database.airbnb_listings.bulk_write(operations)

    return True


@retry(wait_fixed=2000)
def get_listings(search_id: ObjectId, variables: dict = {}, offset: int = 0, limit: int = 300, listings: list = []) -> list:
    """Get paginated Airbnb listings for search parameters"""
    variables["exploreRequest"]["itemsOffset"] = offset    
    
    extensions = {
        "persistedQuery": {
            "version": 1,
            "sha256Hash": os.environ["AIRBNB_SHA256_HASH"],
        }
    }

    headers = {
        "X-Airbnb-API-Key": os.environ["AIRBNB_API_KEY"],
    }
    
    params = {
        "operationName": "ExploreSections",
        "locale": "en",
        "currency": "EUR",
        "variables": json.dumps(variables),
        "extensions": json.dumps(extensions)
    }
    
    scraper = cloudscraper.create_scraper()
    r = scraper.get("https://www.airbnb.com/api/v3/ExploreSections", headers=headers, params=params)
    if r.status_code != 200:
        print(f"[{search_id}~{offset}] An error has occured, retrying...")
        raise Exception()
    
    r = r.json()
    sections = r["data"]["presentation"]["explore"]["sections"]["sections"]
    for section in sections:
        if section["sectionComponentType"] != "EXPLORE_SECTION_WRAPPER":
            continue
        
        items = section["section"]["child"]["section"]["items"]
        listings.extend(items)
        
    if len(listings) >= limit:
        return listings
    
    time.sleep(2)
    offset = len(listings)
    return get_listings(search_id=search_id, variables=variables, offset=offset, listings=listings)