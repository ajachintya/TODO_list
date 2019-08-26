//requiring express
const express = require('express');


//requiring databse from config folder
const db=require('./config/mongoose');
//require schema
const Todo=require('./models/todo');

//running express function
const app=express();

//port
const port=8000;

//setting up ejs(view engine)
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());

//use express routes or telling it to use the router
app.use('/',require('./router/index'));

//middleware to use static files like .css


app.use(express.static('assets'));

//creating a listen on specified port or path
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log("Server is running on port: ",port);
});