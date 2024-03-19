const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AddBook=new Schema({
    patientName:{
        type:String,
        // required:true

    },
    
    age:{
        type:String,
        // required:true
    },
    gender:{
        type:String,
        // required:true
    },
    mobile:{
        type:String,
        // required:true
    },
    disease:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true

    },
    
    department:{
        type:String,
        // required:true
    },
    date:{
        type:String,
        // required:true
    },
    time:{
        type:String,
        // required:true
    }

})

module.exports = mongoose.model("AddBook",AddBook);

// export default mongoose.model("patient",Patient);