// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var db  = require('../models');

// expose this function to our app using module.exports
module.exports = function(passport) {
    // console.log("passport loading");

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        // console.log("user.uuid",user.uuid);
        done(null, user.uuid);
    });

    // used to deserialize the user
    passport.deserializeUser(function(uuid, done) {
        db.Accounts.findById(uuid).then(function(user) {
 
	        if (user) {
	               
	            done(null, user.get());
	 
	        } else {
	           // console.log("user.errors", user.errors)
	            done(user.errors, null);
	 
	        }
	 
	    });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and account_key, we will override with email
        usernameField: 'email',
        passwordField : 'account_key',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, account_key, done) {
        // console.log("%%%%%%%%%%%%%%%%%",req.body);
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
        // console.log("test");
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists

        db.Accounts.findOne({
            where: {
            	email: email
            }
        }).then(function(user, err){
        	if(err) {
                console.log("err",err)
                return done(err);
            } 

            // check to see if theres already a user with that email
            if (user) {

            	console.log('signupMessage', 'That email is already taken.');
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                // console.log("creating");
                // if there is no user with that email
                // create the user
                db.Accounts.create({
                            first_name:req.body.first_name,
                            last_name:req.body.last_name,
                            street: req.body.street,
                            city: req.body.city,
                            state: req.body.state,
                            zip: req.body.zip,
                            balance: req.body.balance,
						    email: req.body.email,
                            phone: req.body.phone,
						    account_key: db.Accounts.generateHash(account_key)

						    }).then(function(dbUser) {
						    	//console.log("created result: ", dbUser);
						      // send post back to render
						      return done(null, dbUser);

						    }).catch(function (err) {
						      // handle error;
						      console.log(err);
						    }); 
            }
          });   
        });

}));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and account_key, we will override with email
        usernameField: 'email',
        passwordField : 'account_key',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, account_key, done) { // callback with email and account_key from our form
       
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.Accounts.findOne({
            where: {
                email: req.body.email 
            }
        }).then(function(user, err) {
            // console.log("user", user);
            // if there are any errors, return the error before anything else
            
            // console.log("&&&",err);

            // console.log("****",!user)
            // console.log("^^^",(!user.validPassword(req.body.account_key)));

            // if (err){
            //     console.log("err", err);
            //     return done(err);  
            // }
                

            // if no user is found, return the message

            if (!user){
                console.log("no user found");
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            }
                

            // if the user is found but the account_key is wrong
            if (user && !user.validPassword(req.body.account_key)){

                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            }

            // all is well, return successful user

            return done(null, user);
         
            // all is well, return successful user

        });

    }));

};