#!/usr/bin/env python

from google.appengine.ext import ndb

# These classes define the data objects
# that you will be able to store in
# AppEngine's data store.

class Heroes(ndb.Model):
    name = ndb.StringProperty()
    skills = ndb.StringProperty()
    team = ndb.StringProperty()
    city = ndb.StringProperty()
    cId = ndb.IntegerProperty()
    
