var db = require("../models");


var passport = require('passport');


module.exports = function (app) {

    app.get("/signup", function (req, res) {
        res.render("accounts");
    });

    app.get("/accounts/view", function (req, res) {
        console.log("%%%%%%%%% is logged in", req.isAuthenticated());
       
        if(req.isAuthenticated()){
           // var user = {
           //    id: req.session.passport.user,
           //    isloggedin: req.isAuthenticated()
           //  }

          db.Accounts.findOne({
            where:{
              uuid: req.session.passport.user
            }
          }).then(function(dbUser){
            var user = {
              userInfo: dbUser.dataValues,
              id: req.session.passport.user,
              isloggedin: req.isAuthenticated()
            }
            res.render("view-account", user);
          })
           
        }
        else {
          var user = {
              id: null,
              isloggedin: req.isAuthenticated()
            }
          res.redirect("/");
        }
       
    });


    // app.delete("/accounts/:account_id/:account_key", function (req, res) {
    //     db.Accounts.destroy({
    //         where: {
    //             id: req.params.account_id,
    //             account_key: req.params.account_key
    //         }
    //     }).then(function (dbAccounts) {
    //         res.json(dbAccounts);
    //     })
    // });


    // app.put("/accounts/:account_id/:account_key", function (req, res) {
    //     db.Accounts.update({
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         street: req.body.street,
    //         city: req.body.city,
    //         state: req.body.state,
    //         zip: req.body.zip,
    //         balance: req.body.balance,
    //         email: req.body.email,
    //         account_key: req.body.account_key
    //     }, {
    //             where: {
    //                 id: req.params.account_id,
    //                 account_key: req.params.account_key
    //             }
    //         }).then(function (dbAccounts) {
    //             res.json(dbAccounts);
    //         })
    // });


    // logout of user account
    app.get('/logout', function(req, res) {
        req.session.destroy(function(err){
          req.logout();
          res.clearCookie('user_sid');
          res.clearCookie('first_name');
          res.clearCookie('user_id');
          res.redirect('/');
        })
    });





// process the signup form ==============================================
//=======================================================================

  app.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      console.log("info", info);
      if (err) {
        console.log("passport err", err);
        return next(err); // will generate a 500 error
      }
      // Generate a JSON response reflecting authentication status
      if (! user) {
        console.log("user error", user);
        return res.send({ success : false, message : 'authentication failed' });
      }
      
      // ***********************************************************************
      // "Note that when using a custom callback, it becomes the application's
      // responsibility to establish a session (by calling req.login()) and send
      // a response."
      // Source: http://passportjs.org/docs
      // ***********************************************************************

      req.login(user, loginErr => {
        if (loginErr) {
          console.log("loginerr", loginerr)
          return next(loginErr);
        }
        //var userId = user.dataValues.id;
        console.log('redirecting....');
        
        res.cookie('first_name', user.first_name);
        res.cookie('user_id', user.uuid );
        return res.redirect("/accounts/view");
      });      
    })(req, res, next);
  });

  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      console.log("\n\n\n########userrrr", user)
      if (err) {
        console.log("passport err", err);
        return next(err); // will generate a 500 error
      }
      // Generate a JSON response reflecting authentication status

      if (!user) {

        return res.send({ success : false, message : 'authentication failed'});
      }
      
      // ***********************************************************************
      // "Note that when using a custom callback, it becomes the application's
      // responsibility to establish a session (by calling req.login()) and send
      // a response."
      // Source: http://passportjs.org/docs
      // ***********************************************************************

      req.login(user, loginErr => {
        if (loginErr) {
          console.log("loginerr", loginErr)
          return next(loginErr);
        }
        //var userId = user.dataValues.id;
        console.log('redirecting....')
        res.cookie('first_name', user.first_name);
        res.cookie('user_id', user.uuid );

        // if (!req.session.userid) {
        //   var redirectTo = req.session.redirectTo ? req.session.redirectTo : '/';
        //   delete req.session.redirectTo;
        //   // is authenticated ?
        //   res.redirect(redirectTo);
        // } else {
        //     next();
        // }
        // console.log("=====================signup: ",req.headers.referer);
        return res.json(true);
        // return res.redirect("/account");
        
      });      
    })(req, res, next);
  });

}