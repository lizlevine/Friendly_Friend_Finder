// contains api routes that deliver data from the front to the backend and back to frontend

var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1200
    };

    // results of user's survey and parse
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    //    this var calculates the diff btwn user's scores and each friend in database

    var totalDifference = 0;

    // Use nested for loop / loops through each of the possible friend matches in db

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;

      // then loop through all SCORES of each friend in db
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // calculates the diff in absolute numbers btwn the scores of friends and users 
        totalDifference += Math.abs(
          parseInt(userScores[j]) - parseInt(friends[i].scores[j])
        );

        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friends.push(userData);

    res.json(bestMatch);
  });
}
