/* Require all dependencies */
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');

/* Set up the express application */
var app = express();
var PORT = process.env.PORT || 3000;

/* Serve static content to public folder */
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

/* Set up Handlebars */
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

/* Import routes and give server access to them */
var burgersController = require("./controllers/burgers_controller.js");

app.use("/", burgersController);

app.listen(PORT);