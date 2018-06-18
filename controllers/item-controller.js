
var db = require("../models");
var passport = require('passport');

module.exports = function (app) {

    //Brings to add-items form.
    app.get("/post-items/new", function (req, res) {
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.render("add-items", user);
        }else {
            res.redirect("/")
        }
        
    });

    //Posting item to item table.
    app.post("/post-items/new", function (req, res) {
        console.log(req.body);
        console.log("is logged in",req.isAuthenticated())
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            db.Items.create({
                item_name: req.body.item_name,
                description: req.body.description,
                price: req.body.price,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                picture_link: req.body.picture_link,
                owner_id: req.session.passport.user
            }).then(function (dbItems) {
                res.redirect("/post-items/new");
            });
            
        }else {
            res.redirect("/")
        }
        
    });

    app.put("/post-items/update/:item_id", function (req, res) {
        if(req.isAuthenticated()){
            db.Items.update({
            item_name: req.body.item_name,
            description: req.body.description,
            price: req.body.price,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            picture_link: req.body.picture_link,
            owner_id: req.body.owner_id,
            available: req.body.available
        }, {
            where: {
                id: req.params.item_id,
            }
        }).then(function (dbItems) {
            db.Transactions.create({
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                items_id: req.params.item_id,
                renter_id: req.session.passport.user
            }).then(function(){
                res.redirect("/post-items/new");
            })
        })
        }else {
            res.redirect("/")
        }
        
    });
            
    //Update the item's desceription etc...
    app.get("/post-items/transactions/:account_id/:account_key/:item_id", function (req, res) {
        db.Accounts.findOne({
            where: {
                id: req.params.account_id,
                account_key: req.params.account_key
            }
        }).then(function (dbAccounts) {
            console.log(dbAccounts);
            // //IF confirmed then apply below.
            // db.Items.update({
            //     available: req.body.start_date
            // }, {
            //         where: {
            //             id: req.params.item_id
            //         }
            //     }).then(function (result) {
            //         if (result.changedRows == 0) {
            //             return res.status(404).end();
            //         } else {
            //             res.status(200).end();
            //         }
            //     })

        })

    });

    //Delete an item.
    app.delete("/post-items/:item_id", function (req, res) {
        db.Items.destroy({
            where: {
                id: req.params.item_id
            }
        }).then(function (result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    });
}

