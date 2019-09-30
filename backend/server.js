//nodemon server.js restart at every save, very cool

const express = require('express');  // Framework
const cors = require('cors'); // Cross Origin truc pour recuperer donnes d'autres sites
const mongoose = require('mongoose'); // Represents the MongoDB datas as objects

// Loads env variables from a .env file and charges them into process
// -> cf ci-dessous : ATLAS_URI = root:clemence@....
require('dotenv').config(); 


const app = express(); //create an express server
const port = process.env.PORT || 5000; //whatever is in the env variable PORT OR 5000

// Our middlewares : provides services to applications beyond those available from the operating system
app.use(cors()); //cors middleware
app.use(express.json()); //allow us to parse json, adding the middleware to the stack

const uri = process.env.ATLAS_URI; //on recupere la cle dans .env
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}); //on se connecte avec des flags obligatoires
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MoongoDB database connection established successfully");
}) 

// After the models, we need to add the API endpoint routes, so the server is able to CRUD
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// importing then using the files, so when they go to www.site.com/exercises 
// -> its going to load everything in the exercises Router
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
