const nodemailer = require('nodemailer')
const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_FROM} = require('../keys/index');

const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
    from: EMAIL_FROM
})

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
    })
}

module.exports = mailer
