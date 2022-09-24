const express = require("express");
const app = express();

app.all("*", function (req, res, next) {
  console.log(req, "REQ");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, Autherization, "
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(express.static("public"));

app.listen(4002, () => {
  console.log("running 4002");
});
