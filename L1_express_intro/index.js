const express = require("express");
const app = express();

app.get('/', (req, res) => {
  return res.send("web page");
});

app.listen(8001, () => {
  console.log("server started on port 8001");
});
