const LocalStrategy = require('passport-local').Strategy
const User = require('./models/user.model');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
    
    //Local strategy
    passport.use(new LocalStrategy(
        {passReqToCallback: true},
        function (req,username, password, done){
        console.log('ran')
        //Match username
        const query = {username: username}
        User.findOne(query, function(err, user) {
            if (err) console.log(err);
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' })
            }
            //Match password
            bcrypt.compare(password, user.password, function(err, isMatch){
                if (err) 
                    throw err;
                if (isMatch){
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Wrong password'})
                }  
            })
        })
    }))
    passport.serializeUser(function(user, done) {
        console.log('serialized')
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        console.log('deserialized')
        done(err, user);
    });
    });
}