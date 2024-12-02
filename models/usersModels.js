const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        minlength: [6, 'Email must be 4 characters'],
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    verfied: {
        type: Boolean,
        default: false
    },
    veficationCodeValidation: {
        type: String,
        select: false
    },
    veficationCode: {
        type: String,
        select: false
    },
    forgotPasswordcode: {
        type: String,
        select: false
    },
    forgotPasswordValidation: {
        type: String,
        select: false
    }
}, {
    timestamps: true // Move this here as a schema option
});

module.exports = mongoose.model('User', userSchema);
