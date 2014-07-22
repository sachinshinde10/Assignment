#!/usr/bin/env python

# Importing the controllers that will handle
# the generation of the pages:
from controllers import ajax, mainh

# Importing some of Google's AppEngine modules:
#from google.appengine.ext 
import webapp2
# from webapp2 import util

# This is the main method that maps the URLs
# of your application with controller classes.
# If a URL is requested that is not listed here,
# a 404 error is displayed.

# def main():
application = webapp2.WSGIApplication([('/', mainh.MainHandler), 
	('/heroop', ajax.UsersHandler)], debug=True)

#     util.run_wsgi_app(application)

# if __name__ == '__main__':
#     main()
