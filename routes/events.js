const router = require("express").Router();
let events = require("../models/events.model.js");

router.route("/").get((req, res)=>{
    events.find()
    .then(events=> res.json(events))
    .catch(err=> res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res)=>{
    const username = req.body.name;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newEvent = new Event({
        username,
        description,
        date,
    });
newEvent.save()
.then(()=> res.json("event added!"))
.catch(err=> res.status(400).json("Error:" + err));
});

module.exports = router;