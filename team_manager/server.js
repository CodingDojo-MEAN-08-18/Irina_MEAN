
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');
var mongoose = require('mongoose');

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// static content from angular
app.use(express.static(path.join(__dirname, '/team-manager/dist')));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});
});
