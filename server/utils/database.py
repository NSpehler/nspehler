import os

from functools import wraps
from pymongo import MongoClient


def database(function):
    @wraps(function)
    def inner(*args, **kwargs):
        database = MongoClient(os.environ["DB_URL"]).get_database()
        g = function.__globals__
        g["database"] = database

        return function(*args, **kwargs)

    return inner
