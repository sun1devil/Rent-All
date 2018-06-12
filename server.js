//Starting point of Node Express server.

require("dotenv").config();
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

//
var db = require("./models");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//TODO: To be enabled when public folder is created.
app.use(express.static("public"));

require("./controllers/account-controller.js")(app);

// require("./controllers/transaction-controller.js")(app);
require("./controllers/html-routes.js")(app);
require("./controllers/item-controller.js")(app);

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on localhost:" + PORT);
    })
})