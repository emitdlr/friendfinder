console.log('HTML Route Connected Successfully');

// Node Dependencies
var path = require('path');


// Includes Two Routes
function htmlRoutes(app) {

// A GET Route to /survey
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

// A default USE route that leads to home.html
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}

module.exports = htmlRoutes;