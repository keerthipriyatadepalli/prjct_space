const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
});
module.exports = mongoose.model("user",UserSchema);