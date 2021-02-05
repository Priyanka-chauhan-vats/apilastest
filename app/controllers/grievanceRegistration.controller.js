const ResourceReg = require('../models/grievanceRegistration.model');
//const Booking = require('../models/booking.model');
const otp = require('./Grievanceotp.controller.js');
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
exports.registrationStep1 = (req, res) => {
    console.log("Registration Controller is hittedddddd");
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
			 rwa_status :req.body.rwa_status,
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
exports.generateResLoginOtp = (req, res) => {
    let loginotp = otp.create();
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
exports.verifyOTP = (req, res) => {
    logger.log(req.body.phoneNumber);
    logger.log(req.body.otp);
    ResourceReg.find({ phoneNumber: req.body.phoneNumber })
        .then(result => {
            //result is an array, array length must be 1
            console.log(result);
            if (result[0].login_otp == req.body.otp) {
                res.send({
                    statusCode: 200,
                    message: "otp verified",
                    userID: result[0]._id,
                    Name: result[0].Name,
                    email: result[0].email,
                    phoneNumber: result[0].phoneNumber,
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
exports.verifyRegOTP = (req, res) => {
    logger.log(req.body.phoneNumber);
    console.log(req.body.phoneNumber)

    logger.log(req.body.otp);
    console.log(req.body.otp)

    ResourceReg.find({ phoneNumber: req.body.phoneNumber })
        .then(result => {
            //result is an array, array length must be 1
            console.log(result);
            console.log(result[0].otp)
            console.log(req.body.otp)
            if (result[0].otp == req.body.otp) {
                // res.send({
                //     statusCode: 200,
                //     message: "otp verified",
                //     userID: result[0]._id
                // })
                return res.status(200).send({
                             message: "otp verified",
                             statusCode: 200,
                             userID: result[0]._id,
                    Name: result[0].Name,
                    email: result[0].email,
                    phoneNumber: result[0].phoneNumber,
                         });

            }
            else {
                // res.send({
                //     statusCode: 400,
                //     message: "wrong otp",
                // })
                return res.status(400).send({
                    message: "otp not verified",
                    statusCode: 400
                   
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
}

//Registration 2.



//Registration 3.
exports.registrationStep3 = (req, res) => {
    console.log("Register step 3 Controller is hitted");
    console.log(req.body);
    let RB = req.body;
    // if (!RB.email) {
    //     return res.status(400).send({
    //         message: 'Invalid Request..'
    //     });
    // }
    ResourceReg.findByIdAndUpdate({ _id: RB.userId }, {
        //gender: req.body.gender,
      
        Location: req.body.location,
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
				"message": `Thank you very much for committing your waste for a good cause.For your convenience, you can also download our mobile app from our wibsite or App Store for IOS and Play Store for Android.Download now Team Pra-nee`
			});
			sendmail.send({
				"to": req.body.email,
				"subject": 'Pra-nee',
				"text": 'Thank you very much for committing your waste for a good cause. For your convenience, you can also download our mobile app from our wibsite or App Store for IOS and Play Store for Android.Download now',
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



// exports.donorsprofile = (req, res) => {
//     console.log("find single donor by id");
//     console.log(req.body.userID);
//    // const RB = req.body;

//     //Validation
  
//     ResourceReg.find({ _id: req.body.userID })
//         .then(donordata => {
//             console.log("Resgistered user array");
//             console.log(donordata);
//             if (donordata.length == 0) {
//                 console.log("We Can Proceed with Registration");
//                 return res.status(400).send({
//                     statusCode: 400,
//                     result:donordata,
//                     message: 'Donor data not found1111'
//                 })
//             }
//             else {
//                 return res.status(200).send({
//                     statusCode: 200,
//                     result:donordata,
//                     message: 'Donor data found'
//                 })
//             }
//         })

   
// }



exports.donorsUpdateid = (req, res) => {
    
    console.log("donor update by id")
    console.log(req.body);
    ResourceReg.findByIdAndUpdate({ _id: req.body.userID },
        { Name: req.body.Name ,
         email: req.body.email ,
      
         pincode: req.body.pincode ,
         City: req.body.City ,
         State: req.body.State ,
         Location: req.body.Location },
     
        { new: true }).lean()
        .then(data => {
            logger.log(data)
            if (data == null) {
                return res.status(400).send({
                    statusCode: 400,
                    message: 'Donor not updated '
                })
            }
            else {
               
                return res.status(200).send({
                    statusCode: 200,
                    message: 'Donor updated successfully'
                })
            }
        })
        .catch(err => {
            logger.log(err)
            res.send(err)
        })
}