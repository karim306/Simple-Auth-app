const mongoose = require('mongoose');

const  userSchema = mongoose.Schema({
    email: {
        type: String,
        trim : true ,
        required: [true , 'Email is required'],
        unique: [true , 'Email must be unique'],
        minlength : [4 , 'Email must be 4 charcters '], 
        lowercase: true 
    },
    password: {
        type: String,
        required: true ,
        select : false
    },
    verfied:{
        type : Boolean,
        default : false 
    },
    veficationCodeValidation:{
        type : String,
        select : false 
    },
    veficationCode:{
        type : String,
        select : false 
    },
    forgotPasswordcode:{
        type : String,
        select : false 
    },
    forgotPasswordValidation:{
        type : String,
        select : false 
    },
    // userName: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // role: {
    //     type: String,
    //     required: true,
    //     enum: ['admin', 'user']
    // },
    // lastLogin: {
    //     type: Date,
    //     default: Date.now
    // },
    timeStamps: true
     
    
})

module.exports = mongoose.model('User', userSchema);