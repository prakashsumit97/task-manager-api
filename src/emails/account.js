const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


// sgMail.send({
//     to:'prakashsumit97@gmail.com',
//     from:'sumit.prakash@incred.com',
//     subject:'This is my first creation!',
//     text:'I hope this one actually for you'
// })

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'sumit.prakash@incred.com',
        subject:'Thanks for joingin in.',
        text:`Welcome to the app, ${name}. Let me know  how you get along with the app. `
    })
}

module.exports = {
    sendWelcomeEmail
}