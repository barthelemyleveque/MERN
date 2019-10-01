const mongoose = require('mongoose');

const Schema = mongoose.Schema;// In Mongoose, eveything starts with a schema, each schema maps to a MongoDB collection (<=> table)

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    }
}, {
    timestamps: true,
}); 
/* Only a single field username with some specs (username) */

const User = mongoose.model('User', userSchema); 
/*  'User' could be anything, just the name we're gonna use */

module.exports = User; 
/* export = when requirying file we will get an User object */