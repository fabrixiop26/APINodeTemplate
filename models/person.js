const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model("Person", PersonSchema);