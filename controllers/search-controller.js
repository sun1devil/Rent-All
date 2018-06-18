var db = require("../models");

var passport = require('passport');

module.exports = function (app) {

    app.get("/search", function (req, res) {
        if(req.isAuthenticated()){
            db.Items.findAll({}).then(function (dbItems) {
                console.log("dbItems", dbItems);

                var hbsObj = {
                    items: [],
                    id: req.session.passport.user,
                    isloggedin: req.isAuthenticated()

                }
                dbItems.forEach(function(item){
                    hbsObj.items.push(item.dataValues);
                });

                res.render("search", hbsObj);
            })
        }
        else{
            res.redirect("/");
        }
      
    });

    // app.get("/search/:account_id/:account_key", function (req, res) {
    //     db.Accounts.findAll({
    //         where: {
    //             account_id: req.params.account_id,
    //             account_key: req.params.account_key
    //         }
    //     }).then(function (dbAccounts) {
    //         res.json(dbAccounts);
    //     });
    // });



    // app.post("/search/:item_id/:account_id", function (req, res) {
    //     db.Transactions.create({
    //         start_date: req.body.start_date,
    //         end_date: req.body.end_date,
    //         total_cost: req.body.total_cost,
    //         renter_id: req.body.renter_id,
    //         item_id: req.body.item_id
    //     }).then(function (dbTransactions) {
    //         res.json(dbTransactions);
    //     });
    // });

    // app.put("/search/update/:item_id", function (req, res) {
    //     db.Items.update({
    //         start_date: req.body.input_end
    //     }, {
    //             where: { id: req.params.item_id }
    //         }).then(function (result) {
    //             console.log("this is result", result)
    //             if (result.changedRows == 0) {
    //                 return res.status(404).end();
    //             } else {
    //                 res.status(200).end();
    //             }
    //         })
    // })

}