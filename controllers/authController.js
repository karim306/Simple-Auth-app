const {signupSchema} = require('../middlewares/validator')
const User  = require ('../models/usersModels');
const {dohash} = require('../utils/hashing');



exports.signup = async (req , res ) =>{
    const {email , password } = req.body;
    try{
      const {error , value} = signupSchema.validate({email, password});

       if(error){
        return res.status(401).json({success:false ,  message: error.details[0].message});
       }

        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(401).json({success:false ,  message: 'User already exists'});
        }
       
        const hashedPassword = await dohash(password , 12 );
        const newUser = new User({
            email,
            password: hashedPassword
        })
        const result = await newUser.save();

        result.password = undefined;
        res.status(201).json({success:true ,  message: 'User created successfully', data: result});

    } catch(error){
        console.log(error);
    }
}
