var db = require("../models");

module.exports = function (app) {

    app.get("/accounts/new", function (req, res) {
        res.render("accounts");
    });

    app.get("/accounts/view", function (req, res) {

        res.render("view-account");
    });

    app.get("/accounts/view/:account_id/:account_key", function (req, res) {
        console.log("Testing13")
        db.Accounts.findOne({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function (dbAccounts) {
            console.log(dbAccounts);
            //res.cookie("id", dbAccounts.dataValues.account_id)
            res.render("view-account", dbAccounts.dataValues);
        });
    });

    app.post("/accounts/new", function (req, res) {

        db.Accounts.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            balance: req.body.balance,
            email: req.body.email,
            phone: req.body.phone,
            account_key: req.body.account_key
        }).then(function (dbAccounts) {
            console.log("test",dbAccounts);
            console.log(dbAccounts.dataValues);
            var account_id = dbAccounts["dataValues"]["id"];
            var account_key = dbAccounts["dataValues"]["account_key"];
            console.log(account_id);
            console.log(account_key)
            var acct = {
                id: account_id,
                key: account_key
            }
            // $.get("/accounts/view/" + account_id + "/" + account_key)
            // res.render("home");
            res.cookie('account_id', account_id );
            res.json(acct);
            // res.redirect("/accounts/view/" + account_id + "/" + account_key)
           
            // console.log("page has been redirected");
            // res.json(dbAccounts);
        }).catch(function(err) {
            console.log(err)
        });
    });

    app.delete("/accounts/:account_id/:account_key", function (req, res) {
        db.Accounts.destroy({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function (dbAccounts) {
            res.json(dbAccounts);
        })
    });


    app.put("/accounts/:account_id/:account_key", function (req, res) {
        db.Accounts.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            balance: req.body.balance,
            email: req.body.email,
            account_key: req.body.account_key
        }, {
                where: {
                    id: req.params.account_id,
                    account_key: req.params.account_key
                }
            }).then(function (dbAccounts) {
                res.json(dbAccounts);
            })
    });

}