const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;
// require("./schedular-1");
require("./schedular-2");
app.use(express.json());
app.listen(PORT, () => {
  console.log("Server Started at port " + PORT);
});
