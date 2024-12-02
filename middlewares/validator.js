const joi =require('joi');


exports.signupSchema = joi.object({
    email: joi.string().email({ tlds: { allow: ["com", "net"] } }).min(6).max(60).required(),
    password: joi
    .string().min(8).max(100)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
    //.required(), For testing 
})

