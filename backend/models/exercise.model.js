const mongoose = require('mongoose');

const Schema = mongoose.Schema; // In Mongoose, eveything starts with a schema, each schema maps to a MongoDB collection (<=> table)

const exerciseSchema = new Schema(
    {
        username: {type: String, required: true},
        description: {type: String, required: true},
        duration: {type: Number, required:true},
        date: {type: Date, required: true},
    }, 
    {
        timestamps: true,
    });
/* We have 4 fields but not as many validations (timestamps is an argument) */

const Exercise = mongoose.model('Exercise', exerciseSchema); 
/* could be anything, just the name we're gonna use */

module.exports = Exercise; 
/* when the file is required we get an object */