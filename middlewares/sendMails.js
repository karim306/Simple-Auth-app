const nodeMailer = require('nodemailer');


const transport = nodemailer ({
    service: 'gmail',
    auth: {
        user: process.env.NODE_CODE_SENDING_EMAIL_ADDRES,
        pass:  process.env.NODE_CODE_SENDING_EMAIL_PASSWORD
    }
})


module.exports= transport;