const mongoose = require("mongoose")
const express = require("express")
const app = express();
app.use(express.urlencoded({ extended: false }));

//created schema
const userSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required :true
    },
    last_name :{
        type: String
    },
    email :{
        type: String,
        required : true,
        unique : true
    },
    gender :{
        type: String,
        required: true
    }
}, {timestamps:true});

// make the model
const usermodel = mongoose.model('user', userSchema)

// now we can intrect with the mongo using this object usermodel.
// but first we have to connect it with mongo.

mongoose
.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=> console.log("Mongo db connected"))
.catch((err)=> console.log("ERror is ", err));



app.get("/users", async (req, res) => {
  const allusers = await usermodel.find({});
  const names = allusers.map(user => user.first_name);
  res.send(names); // send array of first names
});



app.post("/user/post", async (req,res)=>{
    const data= req.body
    console.log(data);
    
    const result = await usermodel.create({
        first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            gender: data.gender
    })
    console.log("result", result);

    return res.status(201).json({msg: "sucess"})
    
})
app.listen(8000,()=>{
    console.log("server started");
    
})