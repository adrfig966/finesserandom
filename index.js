require("dotenv").config({path: __dirname + '/secrets.env'});
const express = require("express");
const cookieSession = require('cookie-session');
const cookieParser = require("cookie-parser");
const randroutes = require("./routes/rand");
const randstore = require("./singletons/randstore");
const app = express();

app.use(cookieParser());
app.use("/rand", randroutes);

//Test Endpoint
app.get("/ping", (req, res) => {
  res.send("Received");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
