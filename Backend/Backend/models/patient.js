const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Patient=new Schema({
    patientName:{
        type:String,
        // required:true

    },
    patientID:{
        type:String,
        // required:true

    },
    age:{
        type:String,
        // required:true
    },
    email:{
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
    bed:{
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
    bloodGroup:{
        type:String,
        // required:true
    },
    DOB:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    nurseID:{
        type:String,
        // required:true
    },
    docId:{
        type:String,
        // required:true
    },
    details:{
        type:String,
        // required:true
    }

})

module.exports = mongoose.model("patient",Patient);

// export default mongoose.model("patient",Patient);