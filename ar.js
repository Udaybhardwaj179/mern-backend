// const express = require('express');
// const app = express();
// app.use(express.json());

// let products = [];

// app.post('/products', (req, res) => {
//   const newProduct = {
//     id: products.length + 1,
//     title: req.body.title,
//     price: req.body.price
//   };
//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });

// const nodemailer = require("nodemailer");

// // 1. Create transporter
// const transporter= nodemailer.createTransport(
//     {
        
//         service:"gmail",
     
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
//     html : "mail sent for testing nodemailer.",
//     attachments: [
//   {
//     filename: 'Blank diagram (1) 2.png',
//     path: '/home/uday/Desktop/Uday_Workspace/express_crash_course/Blank diagram (1) 2.png'
//   }
// ]
// })

// const express = require('express');
// const app = express();
// app.use(express.json());
// app.post('/users', (req, res) => {
//     const user = req.body; // JSON from client
//     res.send(`User created: ${JSON.stringify(user)}`);
//     res.send(user)
// });
// app.listen(3000, () => console.log('Server running on port 3000'));

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/my-practise")
//   .then(() => console.log("✅ Database connected"))
//   .catch((err) => console.error("❌ Unable to connect with the database: " + err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String
// }, { timestamps: true });

// const User = mongoose.model("users", userSchema);

// const postSchema = new mongoose.Schema({
//   title: String,
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "users"
//   }
// });
// const Post = mongoose.model("posts", postSchema);

// async function createData() {
//   // Create a new user
//   const user = await User.create({ name: "John Doe", email: "john@example.com" });

//   // Create a post linked to that user
//   await Post.create({
//     title: "My First Post",
//     author: user._id // Reference to the user
//   });

//   console.log("✅ Data saved with relationship");
// }

// async function showData() {
//   // Fetch posts with populated author info
//   const posts = await Post.find().populate("author", "name email -_id");
//   console.log(posts);
// }

// async function run() {
//   await createData();
//   await showData();
  
// }

// run();

// const bcrypt = require("bcrypt");

// async function hashPassword() {
//   const plainPassword = "mySecret123";

//   // 1. Generate salt

//   // 2. Hash password
//   const hashedPassword = await bcrypt.hash(plainPassword, 10);
//   console.log("Hashed Password:", hashedPassword);
//   const storedHash =hashedPassword
//   const isMatch = await bcrypt.compare(plainPassword, storedHash);
//   if (isMatch) {
//     console.log("✅ Password is correct");
//   } else {
//     console.log("❌ Password is incorrect");
//   }
// }

// hashPassword();

const jwt = require("jsonwebtoken");

async function jwtDemo() {
  const payload = { id: 123, email: "john@example.com" };
  const secret = "mySuperSecretKey"; 
  const expiresIn = "1h"; 

  const token = jwt.sign(payload, secret, { expiresIn });
  console.log("Generated Token:", token);

  try {
    const decoded = jwt.verify(token, secret);
    console.log("✅ Token is valid:", decoded);
  } catch (err) {
    console.log("❌ Token is invalid or expired");
  }
}

jwtDemo();



