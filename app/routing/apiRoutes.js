var gamersData = require("../data/gamersData");

// ROUTING
module.exports = function (app) {
  app.get("/api/gamers", function (req, res) {
    res.json(gamersData);
  });
  app.post("/api/gamers", function (req, res) {

    var thisUser = req.body;
    var changes = [];
    console.log(thisUser);
    
    gamersData.forEach(function (user) {
      var totalChange = 0;

      for (var i = 0; i < thisUser.scores.length; i++) {
        var newAnswer = user.scores[i];
        var thisAnswer = thisUser.scores[i];
        var eachChange = newAnswer - thisAnswer;
        totalChange += Math.abs(eachChange);
      }
      changes.push(totalChange);
    });
    console.log("Difference between you and others" + changes);

    var minimumChange = Math.min.apply(null, changes);
    var gamerMatches = [];

    for (var i = 0; i < changes.length; i++) {
      if (changes[i] === minimumChange) {
        gamerMatches.push(gamersData[i]);
      }
    }
    console.log("Minimum Change: " + minimumChange);

    for (var i = 0; i < gamerMatches.length; i++) {
      console.log("Best Match(s): " + gamerMatches[i].userName);
    }
    gamersData.push(thisUser);
    res.json(gamerMatches);
  });
};
