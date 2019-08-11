//requiring express
const express = require('express');

//running express function
const app=express();

//port
const port=8000;

//use express routes or telling it to use the router
app.use('/',require('./routes'));

//creating a listen on specified port or path
app.listen(function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log("Server is running on port: ",port);
});