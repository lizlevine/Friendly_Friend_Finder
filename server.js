// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================


var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var app = express();
var bodyParser= require("body-parser");
var path = require("path");


// ** GODFREY** can you use this before you have this linked to Heroku?

var PORT = process.env.PORT || 8080;

// see extended ... npm packages
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON tpes as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an html body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./app/routing/html-routes.js")(app);


// require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });