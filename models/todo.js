//require
const mongoose=require('mongoose');

//creating schema

const todoSchema= new mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    category:{
         type:String,
         require:true
    },
    date:{
        type:String,
        require:true
    }
});

//collection
const Todo=mongoose.model('Todo',todoSchema);

//exporting
module.exports = Todo;