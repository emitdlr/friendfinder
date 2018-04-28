console.log('API Route Connected Successfully');


var friendsData = require('../data/friends.js');


// Two Routes
function apiRoutes(app) {

// JSON /api/friends
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

// Post routes /api/friends. T
  app.post('/api/friends', function (req, res) {

// Parse new friend input
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }
    newFriend.scores = scoresArray;


// verification of new friend with the existing ones
    var scoreComparisionArray = [];
    for(var i=0; i < friendsData.length; i++){

// Check each friend's scores and sum difference in points
      var currentComparison = 0;
      for(var j=0; j < newFriend.scores.length; j++){
        currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
      }

// Push each comparison between friends to array
      scoreComparisionArray.push(currentComparison);
    }

// best match using the friendsData array
    var bestMatchPosition = 0; // assume its the first person to start
    for(var i=1; i < scoreComparisionArray.length; i++){
      
// comparing results
      if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
        bestMatchPosition = i;
      }

    }

// ***NOTE*** If the 2 friends have the same comparison, then the NEWEST entry in the friendsData array is chosen
    var bestFriendMatch = friendsData[bestMatchPosition];



    // Reply with a JSON object of the best match
    res.json(bestFriendMatch);



    // Push the new friend to the friends data array for storage
    friendsData.push(newFriend);

  });

}

// Export for use in main server.js file
module.exports = apiRoutes;