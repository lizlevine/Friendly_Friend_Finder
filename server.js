// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var PORT = process.env.PORT || 8080;

// create application/json parser

// var jsonParser = bodyParser.json()

// var urlencodedParser = bodyParser.urlencoded({ extended: true })

// Sets up the Express app to handle data parsing - this was used in restaurant app And Star Wars
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// added this per jordan's demo
// app.use(express.static("app/public"));

// installed body-parser npm package
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON tpes as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custom thing into a Buffer

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an html body into a string
app.use(bodyParser.text({ type: 'text/html' }));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


// below is how the requires are written for restaurant app
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
