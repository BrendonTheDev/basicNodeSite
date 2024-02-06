# Basic Node Site

# Project Goal

The goal of this project is to create a server and basic informational site. The site is to include a server.js file and html pages with routing to change pages.

# 2/6/2024 Change model of project.

I initially created the server in app.js using http. I used html pages for each view of the site. In order to switch between pages, I would have needed to create routes using a switch statement. This code would not be clean or easy to read so I decided to change to using express and ejs view controller.

# Routing with Express Successful.

I have completed the project using express and ejs. Express and ejs view controller provide built-in middleware that makes the routing process clean and easy.

# Complete Process - What I Learned

### - In app.js

-I required and instantiated Express
-Registered ejs view engine
-Listened for requests on port 3000
-Routing with app.get and res.render to GET and render pages
-404 route with app.use and res.render

### -In html/ejs pages

-Used anchor tags with href set to relative path of page.
