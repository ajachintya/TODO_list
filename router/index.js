//fetching the existing or the same instance of express as it is requiring second time     
const express=require('express');

//create a route handlers.
const router = express.Router();

//exporting home_controllers
const homeController=require('../controller/home_controller');

//accessing the home controller
router.get('/',homeController.home);

//creating list
router.post('/create-list',homeController.add);

//deleting 
router.post('/delete-list',homeController.del);

//exporting this to be available to the index.js 
module.exports = router;