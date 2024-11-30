const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded( { extended: true } ));
const authRouter = require('./routers/authRouter.js');



//connect to mongoose
mongoose
.connect(process.env.MONGO_URL).then(() => {
  console.log( "connecting to Datbase...");
}).catch((err )=>{

     console.l0g(err);
});

// use the router config
app.use( '/api/auth' , authRouter);


app.get('/' , (req , res) => {
    res.json({message: "hello world!"});
})






app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})