const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){

    res.sendFile(__dirname+"/index.html");
  
});

app.get("/privacyPolicy", function(req, res){

  res.sendFile(__dirname+"/privacyPolicy.html");

});

app.get("/legalNotice", function(req, res){

  res.sendFile(__dirname+"/legalNotice.html");

});

