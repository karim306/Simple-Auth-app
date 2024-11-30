const express = require('express');

const router = express.Router();



router.post('/signup' , (req , res )=> {
    res.json({ message :"Sign up success"})
})



module.exports = router;