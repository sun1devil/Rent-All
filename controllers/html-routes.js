module.exports = function(app){

    app.get("/", function(req,res){
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.render("home", user);
        }
        else{
            res.render("home");
        }
        
    })

    app.get("/list-items", function(req,res){
        res.render("search");
    });

    app.get("/signup", function(req,res){
        if(req.isAuthenticated()){
            res.redirect("/acounts/view");
        }else{
           res.render("accounts"); 
        }
        
    });

    app.get("/add-items", function(req, res){
        if(req.isAuthenticated()){
            res.render("add-items");
        }else {
            res.redirect()
        }

        
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