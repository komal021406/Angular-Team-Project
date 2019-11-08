//py
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    // date:{
    //     type:Date,
    //     default:Date.now
    // }


})

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Users",userSchema); //export so we can use in other files