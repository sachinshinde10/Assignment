#!/usr/bin/env python

import os
from datetime import datetime

# from google.appengine.ext 
import webapp2
from google.appengine.ext.webapp import template
# google.appengine.ext.
# This controller handles the
# generation of the front page.

class MainHandler(webapp2.RequestHandler):
    def get(self):

        # We are using the template module to output the page.


        path = os.path.join(os.path.dirname(__file__), '../views/index.html')
        
        self.response.out.write( template.render( path, {} ) )

        
