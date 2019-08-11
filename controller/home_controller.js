//A group of actions is called as controller

//an exported function home
module.exports.home=function(req,res){
    return res.render('home',{
        title:"TODO List"
    });
};
