const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type:String,
        required: false,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email ID")
            }
        }
    },
    phone:{
        type: Number,
        required: false,
        min: 10
    },
    message:{
        type: String,
        required: false,
        minLength: 3

    },
    date:{
        type:Date,
        default:Date.now

    }


})

// we need to creat a connection

const User = mongoose.model("User",userSchema);

module.exports = User;

