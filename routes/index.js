//fetching the existing or the same instance instance of express as it is requiring second time     
const express=require('express');

//create a route handlers.
const router = express.Router();
//exporting this to be available to the index.js 
module.exports= router;