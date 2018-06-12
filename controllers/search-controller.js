var db = require("../models");

module.exports = function(app){

    app.get("/search/", function(req,res){
        db.Items.findAll({}).then(function(dbItems){
            res.json(dbItems);
        });
    });

    app.get("/search/:item_id/:account_id/:account_key", function(req,res){
        db.Accounts.findAll(where:{
        	item_id: req.params.item_id,
  			account_key: req.params.account_key
        }).then(function(dbItems){
            res.json(dbItems);
        });
    });

    app.post("/search/:item_id/:account_id", function(req,res){
   		db.Transactions.create({
        	start_date: req.body.start_date,
            end_date: req.body.end_date,
            total_cost: req.body.total_cost,
            renter_id: req.body.renter_id,
            item_id: req.body.item_id
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });
    });

}