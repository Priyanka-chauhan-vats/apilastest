const ResourceReg = require('../models/BeneficiarySignup.model');
const otp = require('./otp.controller.js');
const sms = require('./sms.controller');
const sendmail = require('./email.controller');

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


//Registration 1
exports.BregistrationStep1 = (req, res) => {
    console.log("Registration Controller is hitted");
    console.log(req.body);
   // const RB = req.body;

    //Validation
  
    ResourceReg.find({ phoneNumber: req.body.phoneNumber })
        .then(registeredUser => {
            console.log("Resgistered user array");
            console.log(registeredUser);
            if (registeredUser.length == 0) {
                console.log("We Can Proceed with Registration");
                RegisterUser()
            }
            else {
                return res.status(200).send({
                    statusCode: 400,
                    message: 'User Is Allready Registered'
                })
            }
        })

    function RegisterUser() {
        var digits = '0123456789';
        let Otp = '';
        for (let i = 0; i < 6; i++) {
            Otp = Otp + digits[Math.floor(Math.random() * 10)];
        }
        //send Message here
        const registration = new ResourceReg({
            Name: req.body.Name,
            email: req.body.email,
                phoneNumber: req.body.phoneNumber,
            OTP: Otp
          
        
        });

  sms.send({
                    "mobile": req.body.phoneNumber,
                    "message": `${Otp} is your OTP for Pra-nee.org SignUp. Do not share OTP with anyone`
                })

        registration.save()
            .then(data => {
                data.OTP = undefined;
                data.statusCode = 200
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || 'error occured while, registering new user'
                });
            });
    }
}



//To Generate Login OTP
exports.BgenerateResLoginOtp1 = (req, res) => {
    let loginotp = otp.create();
    logger.log(loginotp);
    console.log(loginotp)
    ResourceReg.findOneAndUpdate({ phoneNumber: req.body.phoneNumber },
        { login_otp: loginotp },
        { new: true }).lean()
        .then(data => {
            logger.log(data)
            if (data == null) {
                res.status(200).send({
                    statusCode: 400,
                    message: "User is not registered"
                })
            }
            else {
                sms.send({
                    "mobile": req.body.phoneNumber,
                    "message": `${loginotp} is your OTP for Pra-nee.org login. Do not share OTP with anyone`
                })
                let response = Object.assign(data, { statusCode: 200 })
                res.status(200).send(response)
            }
        })
        .catch(err => {
            logger.log(err)
            res.send(err)
        })
}

//Verify Login OTP
exports.BverifyOTP1 = (req, res) => {
    logger.log(req.body.phoneNumber);
    logger.log(req.body.otp);
    logger.log("fdsfsdf");
    ResourceReg.find({ phoneNumber: req.body.phoneNumber })
        .then(result => {
            //result is an array, array length must be 1
            console.log(result);
            if (result[0].login_otp == req.body.otp) {
                res.send({
                    statusCode: 200,
                    message: "otp verified",
                    userID: result[0]._id
                })
            }
            else {
                res.send({
                    statusCode: 400,
                    message: "wrong otp",
                })
            }
        })
        .catch(err => {
            console.log(err);
        })

}

//Verify Registration OTP
exports.BverifyRegOTP1 = (req, res) => {
    logger.log(req.body.phoneNumber);
    logger.log(req.body.otp);
    ResourceReg.find({ phoneNumber: req.body.phoneNumber })
        .then(result => {
            //result is an array, array length must be 1
            console.log(result);
            if (result[0].OTP == req.body.otp) {
                res.send({
                    statusCode: 200,
                    message: "otp verified",
                    userID: result[0]._id
                })
            }
            else {
                res.send({
                    statusCode: 400,
                    message: "wrong otp",
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.BregistrationStep3 = (req, res) => {
    console.log("Register step 3 Controller is hitted");
    console.log(req.body);
    let RB = req.body;
    
    ResourceReg.findByIdAndUpdate({ _id: RB.userId }, {
        //gender: req.body.gender,
        BPL: req.body.BPL,
            FatherName: req.body.FatherName,
            Marks12: req.body.Marks12,
            passingyear: req.body.passingyear,
            City: req.body.City,
            State: req.body.State,
            pincode: req.body.pincode,

    }, { new: true })
        .then(register => {
            if (!register) {
                return res.status(404).send({
                    message: 'Service not found with id' + req.body.userId
                });
            }

            sms.send({
				"mobile": req.body.mobile,
				"message": `Thank you for registering, your application has been sent for evaluation. If selected, you will be contacted by our team.
                For your convenience, you can also download our mobile app from our wibsite or App Store for IOS and Play Store for Android.
                Download now (
                Team Pra-nee`
			});
			sendmail.send({
				"to": req.body.email,
				"subject": 'Pra-nee',
				"text": 'Thank you for registering, your application has been sent for evaluation. If selected, you will be contacted by our team.For your convenience, you can also download our mobile app from our wibsite or App Store for IOS and Play Store for Android.Download now Team Pra-nee',
			});

            res.send(register);

        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Error Service not found with id' + req.body.userId

                });
            }
            return res.status(500).send({
                message: 'Error updating service with id' + req.body.userId


            });
        });
}



exports.listofbene = (req, res) => {
    console.log("Benefis find all");
        // logger.trace("get all the dealer");
        ResourceReg.find({})
             .then(allitem => {
    console.log(allitem);
                 res.send(allitem);
             })
             .catch(err => {
                 res.status(500).send({
                     message: err.message || "can't fetch speciality"
                 });
             });
     }