const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();


// console.log('Request Body:', req.body);
router.post('/signup' ,authController.signup ,(req ,res)=>{
   // console.log('Request Body:', req.body); tetsing
} ) 
    
router.post('/signin' ,authController.signin ,(req ,res)=>{
    // console.log('Request Body:', req.body); tetsing
 } ) 

 router.post('/signout' ,authController.signout ,(req ,res)=>{
    // console.log('Request Body:', req.body); tetsing
 } ) 

module.exports = router;