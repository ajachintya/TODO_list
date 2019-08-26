//require mongoose
const mongoose =require('mongoose');

//establishing connection to todo_list_db database
mongoose.connect('mongodb://localhost/todo_list_db');

//aquiring the connection
const db=mongoose.connection;

//if error occurs
db.on('error',console.error.bind(console,'error connecting to db'));

//what to do once the connection is open 
db.once('open',function(){
    console.log('successfully connected to database');
});