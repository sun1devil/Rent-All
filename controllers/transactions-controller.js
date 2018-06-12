var db = require("../models");

module.exports = function(app){

	app.get("/transactions/:account_id/:account_key", function(req,res){
        db.Transactions.findAll({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });
    });

    app.get("/transactions/:account_id/:account_key", function(req,res){
        db.Transactions.findAll({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });
    });



};