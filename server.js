// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app= express();
// const bcrypt= require("bcrypt");
// const jwt= require("jsonwebtoken");
// const path = require("path")
// const usermodel= require('./models/user');
// const { readdir } = require("fs");
// app.use(cookieParser());
// app.set("view engine","ejs");

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')))



// app.get('/', (req,res)=>{
//     res.render('index')
// })

// app.post('/create',async(req,res)=>{
//    let {username, email, password, age} = req.body;
//    const pass = await bcrypt.hash(password,10);
   
//    let createduser= await usermodel.create({
//     username,
//     email,
//     password:pass,
//     age
//    })

//    const token = jwt.sign({email},"shhhh")
//    res.cookie("token",token)
//    res.send(createduser)

// })

// app.get('/logout',(req,res)=>{
//     res.cookie("token","")
//     res.redirect('/')
// })


// app.get('/login',(req,res)=>{
//     res.render('login')
// })
// app.post('/login', async (req,res)=>{
//     const user= await usermodel.findOne({email: req.body.email});
//     if(!user)return res.send("Invail credentials")
//     bcrypt.compare(req.body.password,user.password,(err,result)=>{
//         if(result)res.send("yes youb logged in");
//         else res.send("Invail credentials");
        
// })
    
   
// })

// app.listen(8000,()=>{
//     console.log("server started");
    
// })


//modemailer
// const nodemailer = require("nodemailer");

// // 1. Create transporter
// const transporter= nodemailer.createTransport(
//     {
//         host:"smtp.g",
//         service:"gmail",
//         port: 465,
//         auth:{
//             user:"udaybhardwaj179@gmail.com",
//             pass:"napeqhijnjoxbynb"
//         }
//     }
// )

// // 2. Define email options

// transporter.sendMail({
//     to : "udaybhardwaj17@gmail.com",
//     subject: "test mail",
//     html : "mail sent for testing nodemailer."
// })
// 3. Send the email



                               // Multer

// const express= require("express")
// const path = require("path")
// const multer= require("multer")
// const crypto= require("crypto")

// const app= express();


// // 1-> config storage
// // 2-> init upload 

// const storage = multer.diskStorage({

//     destination: function(req,file, cb){
//         cb(null, "uploads");
//     },
//     filename: function(req,file,cb){
//         crypto.randomBytes(12,function(err,bytes){
//             const fn= bytes.toString("hex")+ path.extname(file.originalname)
//             cb(null,fn)

//         })
//     }

// })

// const upload= multer({storage});

// app.post('/upload', upload.single('profilePic'),(req,res)=>{
//     console.log(req.file);
//     res.send("uploaded sucessfully")
    
// })

// app.listen(8000,()=>{
//     console.log("server started");
    
// })