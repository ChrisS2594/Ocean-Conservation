const router = require("express").Router();
let user = require("../models/user.model.js");

router.route("/").get((req, res)=> {
    user.find()
    .then(user=> res.json({}))
    .catch(err=> res.status(400).json("Error:" + err));
});
router.route("/add").post((req, res)=> {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const newUser = new user({email, password, name, lastname});

    newUser.save()
    .then(()=> res.json("User added!"))
    .catch(err=> res.status(400).json("Error:" + err));
});
module.exports = router;