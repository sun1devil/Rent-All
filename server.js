//Starting point of Node Express server.

require("dotenv").config();
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

//
var db = require("./models");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

//TODO: To be enabled when public folder is created.
app.use(express.static("public"));

require("./controllers/html-routes")(app);
require("./controllers/account-controller")(app);
require("./controllers/item-controller")(app);
require("./controllers/search-controller")(app);
require("./controllers/transactions-controller")(app);


db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on localhost:" + PORT);
    })
})