var db = require("../models");

module.exports = function(app){

	app.get("/api/transactions/:account_id/:account_key", function(req,res){
        db.Transactions.findAll({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });
    });

    app.post("/api/transactions", function(req,res){
        db.Transacations.create({
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            total_cost: req.body.total_cost,
            renter_id: req.body.renter_id,
            item_id: req.body.item_id
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });
    });

    app.delete("/api/transactions/:account_id/:account_key", function(req,res){
        db.Transactions.destroy({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function(dnTransactions){
            res.json(dbTransactions);
        })
    })

};