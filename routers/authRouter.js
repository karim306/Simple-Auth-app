const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();


// console.log('Request Body:', req.body);
router.post('/signup' ,authController.signup ,(req ,res)=>{
    console.log('Request Body:', req.body);
} ) 
    




module.exports = router;