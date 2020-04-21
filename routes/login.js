const router = require("express").Router();
const User = require("../models/user.model")



    router.post("/users/login",(req, res, next)=>{
        const{body}= req;
        const{
            email,
            password
        }= body;
        if (!email){
           return res.end({
                success: false,
                message:"error: Email cannot be blank."
            });  
        }
        if (!password){
            return res.end({
                success: false,
                message:"error: Password cannot be blank."
            });
    }
    let emailLower =email.toLowerCase();

    User.find({
        email: emailLower
    },(err, previousUsers)=>{
        if (err){
            res.end("Error: Server error");

        }else {
            res.json(previousUsers);
        }
    });

    });
module.exports = router
