const {signupSchema} = require('../middlewares/validator')




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

        
    } catch(error){
        console.log(error);
    }
}