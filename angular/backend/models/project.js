//nujias
const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const ProjectSchema = mongoose.Schema({
    
    title:String,
    data:[{
        name:{
        type:String},
        code:{
        type:String
    }
}]
        
         
    

})

// userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Projects",ProjectSchema); //export the Schema to the mongoose