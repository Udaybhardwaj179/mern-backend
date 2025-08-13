// const express = require("express"); 
// const app= express();
// const users= require("./MOCK_DATA.json")
// const path = require("path");
// const fs = require("fs");
// const { userInfo } = require("os");

// app.use(express.urlencoded ({extended:false}));//plugin h jo body mai data dal re h postman ke andr us data ko convert kr ra h shayd


// const PORT=8000
// app.use(express.urlencoded({extended:false}))
// app.get("/users", (req,res)=>{
//     return res.json(users)
// })
// app.get("/users/:id",(req,res)=>{
    
//     const id = Number(req.params.id);
    
//     const user= users.find(u=>u.id=== id)
//     return res.json(user)
// })

// app.post("/api/users",(req,res)=>{
//     const data = req.body;
//     users.push({...data, id:users.length+1})
//     fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
//          return res.json({status : "pending",id: users.length})
//     })
   
// })


// app.listen(PORT,()=>{
//     console.log("server started")
// })


// const express = require("express")
// const fs= require("fs")
// const users= require("./data.json")
// const app = express();
// app.get("./us",(req,res)=>{
//     return res.json(users)
// })
// app.get("./users/:id",(req,res)=>{
//     const id = Number(req.body.params);
//     const user = users.find((user)=>user.id===id)
//     return json(user)

// })

// app.listen(8000,()=>{
//     console.log("server  started");
// })  

const express = require("express");
const fs = require("fs");
const users = require("./data.json");
const { error } = require("console");

const app = express();
app.use(express.urlencoded({ extended: false }));

// Corrected endpoint path
app.get("/users", (req, res) => {
  return res.json(users);
});

// Use req.params and fix syntax
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id); // Use req.params.id
  const user = users.find((user) => user.id === id); // Fix arrow function
  return res.json(user); // Use res.json
});
app.post("/user/post",(req,res)=>{
    const data= req.body
    console.log(data);
    users.push({...data,id:users.length+1})
     fs.writeFile("./data.json",JSON.stringify(users),(error,data)=>{
        return res.json({ message: "User added successfully with id ", id :users.length });
    })
})

app.delete("/users/delete/:id",(req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex((user)=> user.id===id);
    if(index===-1){
        return res.end("NOT VALID id")
    }
    users.splice(index,1);
    fs.writeFile("./data.json",JSON.stringify(users),(error,data)=>{
        return res.json({ message: "User deleted successfully" });
    })

})
app.put("./users/change/:id",(req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex((user=> user.id===id))
    users[index]
})
app.listen(8000, () => {
  console.log("Server started on port 8000");
});

