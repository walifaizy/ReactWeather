var express = require("express");

//make an app
var app = express();

app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Express server is running");
})
