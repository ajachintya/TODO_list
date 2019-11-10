//A group of actions is called as controller
const Todo = require('../models/todo');
//an exported function home
module.exports.home = function (req, res) {
    //fetching contacts
    Todo.find({}, function (err, Todo) {
        if (err) {
            console.log('error in fetching contacts from db');
            return;
        }
       //returning to home
        return res.render('home', {
            todo_data: Todo
        });
    });
};

//adding date in month date,year formate
module.exports.add = function (req, res) {
    var date = req.body.date;
    var split = date.split('-');
    if (split[1] == "01") {
        split[1] = "Jan";
    }
    if (split[1] == "02") {
        split[1] = "Feb";
    }
    if (split[1] == "03") {
        split[1] = "Mar";
    }
    if (split[1] == "04") {
        split[1] = "April";
    }
    if (split[1] == "05") {
        split[1] = "May";
    }
    if (split[1] == "06") {
        split[1] = "June";
    }
    if (split[1] == "07") {
        split[1] = "July";
    }
    if (split[1] == "08") {
        split[1] = "Aug";
    }
    if (split[1] == "09") {
        split[1] = "Sept";
    }
    if (split[1] == "10") {
        split[1] = "Oct";
    }
    if (split[1] == "11") {
        split[1] = "Nov";
    }
    if (split[1] == "12") {
        split[1] = "Dec";
    }
    date = split[1] + " " + split[2] + ", " + split[0];
    req.body.date = date;
    //putting contacts in database
    Todo.create(req.body, function (err, newTodo) {
        if (err) {
            console.log("error in creating list");
            return;
        }
        console.log('*******', newTodo);
        res.redirect('back');
    });
}

//delete
module.exports.del = function (req, res) {
    //get the id from the ul
    let id = req.body._id;
    //find the list in the database using id and delete
    if (id == undefined) {
        return res.redirect("back");
    }
    for (let i of id) {
        Todo.findByIdAndDelete(id, function (err) {
            if (err) {
                console.log('error in deleting');
                return;
            }

        });
    }
    return res.redirect('back');
}

