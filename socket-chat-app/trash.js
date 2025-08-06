const express= require("express")
const app=express();
const http= require("http")
const server= http.createServer(app);
app.use(express.static('./public'))
const {Server} = require("socket.io")
const io = new Server(server);
io.on('connection',(socket)=>{
    socket.on("user-message",(value)=>{
        io.emit("message",value)
    })

    
})
server.listen(8000,()=>{
    console.log("Server Connected");
    
})