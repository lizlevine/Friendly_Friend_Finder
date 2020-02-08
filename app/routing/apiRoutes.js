// contains api routes that deliver data from the front to the backend and back to frontend

var friends = require("../data/friends.js");

module.exports= function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: 801
        };

        console.log(req.body);
    })


var waitListData = require("../data/waitinglistData");