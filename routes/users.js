

const router = require("express").Router();
let user = require("../models/user.model.js");


router.route("/login").post((req, res)=>
{
res.json({status:"success"})
}

)
router.route("/").get((req, res)=> {
    console.log(req.body)
    user.find()
    .then(user=> res.json(user))
    .catch(err=> res.status(400).json("Error:" + err));


});
router.route("/add").post((req, res)=> {
    console.log( "this is the response or request",req.body);
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const newUser = new user({email, password, name:firstName, lastName});
    
    newUser.save()
    .then(()=> res.json("User added!"))
    .catch(err=> res.status(400).json("Error:" + err));
});
module.exports = router;