#!/usr/bin/env python

# Including the models:
from models.models import Heroes

# We are using django's simplejson
# module to format JSON strings:

import json

from datetime import datetime,timedelta
#from google.appengine.ext 
from google.appengine.ext import ndb
import webapp2
from google.appengine.api import memcache

# The AJAX controllers:

class UsersHandler(webapp2.RequestHandler):
    def get(self):

        # This class selects the response times
        # for the last 24 hours.

        # Checking whether the result of this
        # function is already cached in memcache:
        #jsonStr = memcache.get("UsersCache")

        # If it is not, we need to generate it:
        #if jsonStr is None:

        heroes_list = Heroes.query()
        heroes_result = []
        for hero in heroes_list:
            heroes_result.append({
                "cId" : hero.cId,
                "name": hero.name,
                "skills": hero.skills,
                "team": hero.team,
                "city": hero.city
                })

        jsonStr = json.dumps(heroes_result)

        # Caching it for five minutes:
        #memcache.add("UsersCache", jsonStr, 300)

        self.response.out.write(jsonStr)


    def post(self):
        json_input = json.loads(self.request.body)
        hero = Heroes()
        hero.name = json_input["name"] 
        hero.cId = json_input["cId"]
        hero.skills = json_input["skills"]
        hero.team = json_input["team"]
        hero.city = json_input["city"]
        hero.put()
        self.response.write("Success")
