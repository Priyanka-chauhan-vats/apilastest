const axios = require('axios');
const nodemailer = require('nodemailer');
const nodemailer_send = require('nodemailer');

exports.send = (into) => {
    console.log(into);
    console.log('Email message hitting');
    async function main(){
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'Pranee.eofficial@gmail.com',
                pass: 'Vedang@123'
            }
        });
   
        let info = await transporter.sendMail({
            from: '"Pra-nee" <Pranee.eofficial@gmail.com>',
            to:into.to,
            subject: into.subject,
            text: into.text,
         
           
        })
   
        console.log("Message sent: %s", info.messageId);
   
       // res.status(200).send({
           // message: "Mail sent"
       // });
    }
    main().catch(console.error);

}

exports.send_mail = (req, res) => {
    console.log(req.body.to);
    console.log('Email message hitting');
    async function main(){
        let testAccount = await nodemailer_send.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'Pranee.eofficial@gmail.com',
                pass: 'Vedang@123'
            }
        });
   
        let info = await transporter.sendMail({
            from: '"Pra-nee" <Pranee.eofficial@gmail.com>',
            to:req.body.to,
            subject: req.body.subject,
            text: req.body.text,
         
           
        })
   
        console.log("Message sent: %s", info.messageId);
   
        res.status(200).send({
            message: "Mail sent"
        });
    }
    main().catch(console.error);

}