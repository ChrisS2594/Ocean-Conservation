const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    
    createdEvents: [{
        type: Schema.Types.ObjectId,
        ref: "Event"
    }],
    isDeleted:{
        type:Boolean,
        default:false
    }


    });
    userSchema.methods.generateHash = password => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
    };
    userSchema.methods.validPassword = password => {
        return bcrypt.compareSync(password, this.password);
    };
const User = mongoose.model("User", userSchema);
module.exports = User;