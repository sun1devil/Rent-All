
var db = require("../models");

module.exports = function (app) {

    //Brings to add-items form.
    app.get("/post-items/new", function (req, res) {
        res.render("add-items");
    });

    //Posting item to item table.
    app.post("/post-items/:account_id/:account_key", function (req, res) {

        // db.Accounts.findOne({
        //     where: {
        //         id: req.params.account_id,
        //         account_key: req.params.account_key
        //     }
        // }).then(function (dbAccounts) {
        //     console.log(dbAccounts);
            // res.json(dbAccounts);

            db.Items.create({
                item_name: req.body.item_name,
                description: req.body.description,
                price: req.body.price,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                picture_link: req.body.picture_link,
                owner_id: req.body.owner_id
            }).then(function (dbItems) {
                res.json(dbItems);
            });

        // });
    });

    app.put("/post-items/update/:item_id", function(req, res){
        db.Items.update({ available: req.body.available},{
            fields:["available"],
            where:{id: id_req.params.item_id}
        }).then(function (result){
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.redirect("/search")
                res.status(200).end();
            }

        })
    })
            
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

