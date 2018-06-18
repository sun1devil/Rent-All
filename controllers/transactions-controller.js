var db = require("../models");

module.exports = function(app){

    app.get("/transactions/", function(req,res){
        res.render("transactions");
    });

	app.get("/transactions/:account_id", function(req,res){
        db.Transactions.findAll({
            where: {
                id: req.params.account_id
            }
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });
    });

    app.get("/transactions/:account_id/:transactions_id", function(req,res){
        db.Transactions.findAll({
            where: {
                id: req.params.account_id,
                transactions_id: req.params.transactions_id
            }
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });
    });



};