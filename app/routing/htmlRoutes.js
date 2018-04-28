
var html = function () {// Basic route that sends the user first to the AJAX Page
    this.home = function (req, res) {
        app.get("/app/public/", function(req, res) {

        res.sendFile(path.join(__dirname, "home.html"));
    });
    this.survey = function (req, res) {
        app.get("/app/public/", function(req, res) {

        res.sendFile(path.join(__dirname, "survey.html"));
    });
}

module.exports = html;