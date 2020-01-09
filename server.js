const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const path = require('path');

require('dotenv').config()

//Define global variables
const app = express();


//importing files
// const playersRoute = require('./api/players')
// const teamRoute = require('./api/teams')
app.use(bodyParser.json());
const usersRoute = require('./api/users')
const PORT = process.env.PORT || 8080;

// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
});

//session middleware
app.use(session({
    secret: 'yoursecret',
    resave: false,
    saveUninitialized: true,
  }))
  
//Passport middleware
require('./passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


// app.use('/api/players', playersRoute)
// app.use('/api/teams', teamRoute)

app.use('/api/users', usersRoute)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})