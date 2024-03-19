const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let addMedicine=new Schema({
    roomNumber:{
        type:String,
        // required:true

    },
    bedNumber:{
        type:String,
        // required:true
    },
    
})

module.exports = mongoose.model("AddMedicine",addMedicine);

// export default mongoose.model("patient",Patient);