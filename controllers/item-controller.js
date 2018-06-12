
var db = require("../models");

module.exports = function (app) {
    
    app.get("/post-items/new", function (req, res) {
        res.render("add-items");
    });

    app.post("/post-items", function (req, res) {
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
    });

    app.put("/post-items/transactions/:account_id/:account_key", function (req, res) {
        db.Items.update({
            start_date: req.body.start_date
        }, {
                where: {
                    id: req.params.account_id,
                    account_key: req.params.account_key
                }
            }).then(function (result) {
                if (result.changedRows == 0) {
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            })
    });

    app.delete("/post-items/:item_id", function (req, res) {
        db.Items.destroy({
            where: {
                id: req.params.item_id,
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

