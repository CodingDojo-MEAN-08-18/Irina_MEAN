var express = require("express");
var fs = require("fs");
var port = 8000;
var bodyparser = require("body-parser");
var app = express();
// Above are the variables we define and
// app is used to create an instance of
// express to be used below


app.set("view engine", "ejs");
// This allows the server to read the ejs files
// in views folder
app.set("views", __dirname + "/views" );
// This makes it easier to pull information
// from the ejs files saved in views
app.use(express.static(__dirname + "/static"));

app.use(bodyparser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.render("index")
})


app.post("/results", function(req, res){
    res.render("results", {name: req.body.name, location: req.body.location, lang: req.body.lang, comment: req.body.comment})
})


app.listen(8000, function() {
  console.log("listening on port 8000");
})
