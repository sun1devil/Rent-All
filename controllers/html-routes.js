module.exports = function(app){

    app.get("/", function(req,res){
        res.render("home");
    })

    app.get("/list-items", function(req,res){
        res.render("query");
    });

    app.get("/account/new", function(req,res){
        res.render("accounts");
    });

    app.get("/add-items", function(req, res){
        res.render("add-items");
    })

    // app.get("/account/:account_id/:account_key" function(req,res){
    //     res.render("add-items");
    // });


    // app.get("/list-items/items", function(req,res){
    //     db.Items.findAll({
    //     }).then(function(result){
    //         res.render(result);
    //     });
    // });

    // app.put("/list-items/items/:account_id/:account_key", function(req,res){
    //     db.Items.update({

    //     }).then(function(result){
    //         res.render(result);
    //     });
    // });

};