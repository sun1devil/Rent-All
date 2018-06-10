var db = require("../models");

module.exports = function(app){

    app.get("/api/accounts/:account_id/:account_key", function(req,res){
        db.Accounts.findAll({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function(dbAccounts){
            res.json(dbAccounts);
        });
    });

    app.post("/api/accounts", function(req,res){
        db.Accounts.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            balance: req.body.balance,
            email: req.body.email,
            account_key: req.body.account_key
        }).then(function(dbAccounts){
            res.json(dbAccounts);
        });
    });

    app.delete("/api/accounts/:account_id/:account_key", function(req,res){
        db.Accounts.destroy({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function(dbAccounts){
            res.json(dbAccounts);
        })
    })

}