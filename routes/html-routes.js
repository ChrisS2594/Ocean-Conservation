let path = require("path");

//routes
module.exports = function(app) {
 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/Assets/index.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/Assets/overfishing.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/Assets/pollution.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/Assets/index.html"));
    });
};