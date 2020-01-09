const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },

    trackedPlayers: [{
        type: String,
        unique: true
    }]
})

userSchema.plugin(uniqueValidator, { message: `Username already exists` });
const User = mongoose.model('User', userSchema);

module.exports = User;