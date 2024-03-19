const UserData = require('../../models/user');
//controller code to add any data in to database.
const AddUserData = async(req,res,next) => {
    const {name,email,password} = req.body;
    let existingUser;
    try{
        existingUser = await UserData.findOne({email});
    }catch(err){
        return consloe.log(err)
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exists! Login Instead."})
    }
    const user = new UserData({
        name,
        email,
        password
    })
    try{
        await user.save()

    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({user})
}
//controller code to get all data from database.
const GetUserData = async(req,res,next) => {
    let users;
    try{
        user = await UserData.find();
    }
    catch(err){
        return console.log(arr)
    }
    if(!users){
        return res.status(400).json({message:"No Users Found."})
    }
    return res.status(201).json({users})
}

//controller code to get single record of data by Id from database.
const UserDataById = async (req,res,next) =>{
    const _id = req.params.id;
    await UserData.findById(_id)
    .then((response) =>{
        res.status(200).json({msg:"successfully fetched single data",response});

    })
    .catch((error) => console.log(error));
};


//controller code to update single record of data by Id in database
const UpdateSingleUser = async(req,res,next) =>{
    const _id = req.params.id;
    console.log(req.body);
    let user = await UserData.findByIdAndUpdate(_id,req.body);
    user = await user
    .save()
    .then(() =>{
        console.log("updated");
        return res.status(200).json({message:"User updated successfully"});
    })
    .catch((er) => {
        console.log(er);
        return res.status(400).json({message:"User not Updated"});
    });
};

//controller code to delete single record of data using ID form database
const DeleteUserData = async (req,res,next) =>{
    const id= req.params.id;
    await UserData.findByIdAndDelete({_id:id})
    .then(() =>{
        res.status(200).json({message:"User data deleted succeffully"});
        console.log("data deleted succeffully");
    })
    .catch((er) =>{
        res.status(400).json({message:"user data not deleted"});
        console.log(er);
    });
};

exports.AddUserData = AddUserData;
exports.GetUserData = GetUserData;
exports.UserDataById = UserDataById;
exports.UpdateSingleUser = UpdateSingleUser;
exports.DeleteUserData = DeleteUserData;