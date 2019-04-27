var gamersData = require("../data/gamerData");

module.exports = function (app) {

    app.get("/api/gamers", function (req, res) {
        res.json(gamersData);
    });

    app.post("/api/gamers", function (req, res) {
        res.json(false);
    });
};
