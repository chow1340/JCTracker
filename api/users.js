const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passport = require('passport')

//--- CREATE A NEW USER
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function(err, salt){
        if(err) {
            console.log(err)
        }
        bcrypt.hash(password,salt,function(err, hash){
            if(err){
                console.log(err)
            } else {
                const password = hash;
                const newUser = new User ({username, password})
                newUser.save(function(err){
                    if(err){
                        res.json(err.message.substr(err.message.length -23))
                    } else {
                        res.json('User added!')
                    }
                })
            }
        })
    })
})
//--- LOG IN
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { 
          res.json(info.message);
          return;
      }
      if(user) {
        req.logIn(user, function(err){
            if (err) {
                return next(err); 
            } else {
                res.json(req.user)
            }
        })
      }
    })(req, res, next); 
  });

// --- Update track players
router.route('/update/players').post((req, res) => {
    const username = req.body.username;
    const playerId = req.body.playerId;
   User.updateOne(
       {username: username}, {$push: {trackedPlayers: playerId}}
    // {username: username}, {$push: {trackedPlayers: {playerId: playerId}}}
   )
    .then(res.json(username))
})

// --- Get the tracked players
router.route('/trackedPlayers').get((req,res) => {
    const username = req.query.username;
    console.log(req.query.username)
    User.findOne({username: username})
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

// --- Remove the tracked player
router.route('/remove/trackedPlayer').delete((req, res) => {
    const username = req.query.username;
    const playerId = req.query.playerId;
    User.update(
        {username: username},
        {$pull: {trackedPlayers: playerId}}
        )
        .then(res => console.log(res))
        .catch(err => console.log(err))
})

module.exports = router;