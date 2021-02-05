const DonorInfo = require('../models/donor.modal') 
var ObjectId= require('mongoose').Types.ObjectId;

const otp = require('./otp.controller.js');
const sms = require('./sms.controller');

exports.create = (req, res) => {
    console.log("DonorInfo controller is hitted"); 
    console.log(req.body);
    function RegisterUser() {
    const DonorIn = new DonorInfo({
        Username: req.body.Username,
        Email: req.body.Email,
        Phoneno: req.body.Phoneno,
        otp: loginotp
       
    });

    let loginotp = otp.create();
		sms.send({
			"mobile": req.body.Phoneno,
			"message": `Hi , ${loginotp} is your OTP for ngo org login. Do not share OTP with anyone`
		})


    DonorIn.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
    }
}