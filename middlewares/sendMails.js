const nodeMailer = require('nodemailer');


const transport = nodemailer ({
    service: 'gmail',
    auth: {
        user: NODE_CODE_SENDING_EMAIL_ADDRES,
        pass: NODE_CODE_SENDING_EMAIL_PASSWORD
    }
})


module.exports= transport;