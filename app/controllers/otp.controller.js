const Registration = require('../models/resource-reg.model');
//const resource-reg = require('../models/resource-reg.model');
var colors = require('colors');
const logger = require('tracer').colorConsole({
    filters: {
        log: colors.gray,
        trace: colors.magenta,
        debug: colors.blue,
        info: colors.green,
        warn: colors.yellow,
        error: [colors.red, colors.bold]
    }
});

exports.create = () => {
    console.log("OTP controller is hitted");
    function generateOTP() {

        // Declare a digits variable  
        // which stores all digits 
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
    return generateOTP()
}

exports.verify = (req, res) => {
    console.log('verify is hitted');
    console.log(req.body.userOTP);
    console.log(req.body.mobile);

    Registration.find({ mobile: req.body.mobile })
        .then(userDetails => {
            logger.info(userDetails);
            if (userDetails.length == 0) {
                logger.error("Handle Exception. critical error");
            }
            else if (userDetails.length == 1) {
                logger.log("everything is fine");
                if (userDetails[0].otp == req.body.userOTP) {
                    return res.status(200).send({
                        message: "OTP Matched"
                    });
                }
                else {
                    return res.status(404).send({
                        message: "OTP does not match"
                    });
                }
            }
            else {
                logger.error("Handle exception");
            }
        });
}