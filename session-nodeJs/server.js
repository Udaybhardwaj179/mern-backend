const express = require("express");

const session = require('express-session')


const app = express();
const PORT = process.env.PORT || 8000;
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60000 }
}))

app.get('/',(req,res)=>{
    req.session.test? req.session.test++ : req.session.test=1;
    res.send(req.session.test.toString())
})
app.listen(PORT, () => {
  console.log("Server Started at port " + PORT);
});