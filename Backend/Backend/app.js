const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./src/routes/userRoutes');
const patient = require('./models/patient');
const AddBook = require('./models/AddBook');
const AddMedicine = require('./models/AddMedicine');
// const cors = require('cors'); s
// const patient = req
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.use('/',UserRouter);
//mongodb+srv://Bhavyasri:uDRFYN8pyqktvoBa@cluster0.gwlwjqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://Bhavyasri:uDRFYN8pyqktvoBa@test.gwlwjqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => app.listen(5000))
.then(() =>
    console.log("Connected to Database & Listining to localhost 5000")
    )
.catch((err) => console.log(err));  
// const dataSchema = new mongoose.Schema({
//     id: Number,
//     name: String,
//     email: String
//   });
  
//   const Data = mongoose.model('Data', dataSchema);
  
//   // Middleware
//   app.use(cors());
  
//   // Route to get data
//   app.get('/data', async (req, res) => {
//     try {
//       const data = await Data.find();
//       res.json(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  
  // Start server
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

app.post('/patient',(req,res,next)=>{
    console.log(req.body)
    const{patientName,patientID,age,email,gender,mobile,disease,address,bed,department,date,bloodGroup,DOB,password,nurseID,docId,details}=req.body.AddPatient;
    const patientform1 = new patient({
        patientName,
        patientID,
        age,
        email,
        gender,
        mobile,
        disease,
        address,
        bed,
        department,
        date,
        bloodGroup,
        DOB,
        password,
        nurseID,
        docId,
        details,
    })
    try{
        patientform1.save();
        return res.status(200).json({msg:"inserted"})

    }catch(err){
        console.log(err);
        return res.status(401).json({msg:"not inserted",result:patientform1})
    }
  })
  
app.get("/patient", async(req,res,next)=>{
    let eventsdata;
    try{
        eventsdata= await patient.find();
        console.log("events" + " " + eventsdata);
        if(!eventsdata){
          return res.status(204).json({message:"no data found."})
      }
      
      return res.status(200).json(eventsdata)
    }catch(err){
        console.log(err);
    }
    
})
  app.post('/AddBook',(req,res,next)=>{
    console.log(req.body.BookAppoint)
    const{patientName,age,gender,mobile,disease,address,email,department,date,time}=req.body.BookAppoint;
    const AddBook1 = new AddBook({
    patientName,
    age,
    gender,
    mobile,
    disease,
    address,
    email,
    department,
    date,
    time,
    })
    try{
        AddBook1.save();
        return res.status(200).json({msg:"inserted"})

    }catch(err){
        console.log(err);
        return res.status(401).json({msg:"not inserted",result:AddBook1})
    }
  })



  app.post('/AddMedicine',(req,res,next)=>{
    console.log(req.body.BedData)
    const{roomNumber,bedNumber}=req.body.BedData;
    const addMedicine1 = new AddMedicine({
    roomNumber,
    bedNumber
    })
    try{
        addMedicine1.save();
        return res.status(200).json({msg:"inserted",result:addMedicine1})

    }catch(err){
        console.log(err);
        return res.status(401).json({msg:"not inserted"})
    }
  })


  app.get("/AddMedicine", async(req,res,next)=>{
    let eventsdata;
    try{
        eventsdata= await patient.find();
        console.log("events" + " " + eventsdata);
        if(!eventsdata){
          return res.status(204).json({message:"no data found."})
      }
      
      return res.status(200).json(eventsdata)
    }catch(err){
        console.log(err);
    }
})






// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB (replace 'your-db-uri' with your actual MongoDB URI)
// mongoose.connect('mongodb://localhost:27017/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Error connecting to MongoDB:', err));

// // Define schema and model
// const dataSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   email: String
// });

// const Data = mongoose.model('Data', dataSchema);

// // Middleware
// app.use(cors());

// // Route to get data
// app.get('/data', async (req, res) => {
//   try {
//     const data = await Data.find();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });