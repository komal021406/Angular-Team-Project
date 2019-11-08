const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const resourceSchema = mongoose.Schema({
//   name:String,
//   code: String
//    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    data: [
        {name: String,
        code: String}]
});
resourceSchema.plugin(uniqueValidator);
// module.exports = mongoose.model("table", resourceSchema);
module.exports = mongoose.model("resource", resourceSchema);