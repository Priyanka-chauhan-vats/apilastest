const Registration = require('../models/Registration.model');
const otp = require('./otp.controller.js');
const sms = require('./sms.controller');
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

exports.create = (req, res) => {
    console.log("Registration Controller is hitted");
    logger.info("Registration Controller is hitted");
    console.log(req.body);
    const RB = req.body;

    if (!RB.firstName || !RB.lastName) {
        return res.status(400).send({
            message: 'Request is not valid'
        });
    }

    let loginotp = otp.create();
    sms.send({
        "mobile": req.body.mobile,
        "message": `Hi , ${loginotp} is your OTP for ngo org login. Do not share OTP with anyone`
    })

    Registration.find({ mobile: req.body.mobile })
        .then(registeredUser => {
            console.log(registeredUser);
            if (registeredUser.length == 0) {
                console.log("we can Proceed with Registration");
                logger.log("we can Proceed with Registration");
                RegisterUser();
            }
            else {
                return res.status(200).send({
                    responseCode: 400,
                    message: 'User is already Registered'
                });
            }
        }).catch(err => {
            console.log(err);
            console.log("we can Proceed with Registration");
        });
    logger.info(otp.create());

    function RegisterUser() {
        const registration = new Registration({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobile: req.body.mobile,
            password: req.body.password,
            otp: loginotp
        });
 
        registration.save()
            .then(data => {
                res.otp = undefined
                let message = {
                    responseCode: 200,
                    message: 'we can proceed further'
                }
                let response = Object.assign(data, message)
                res.send(response);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occured while registring new user'
                });
            });
    }
}

exports.generateLoginOtp = (req, res) => {
    let loginotp = otp.create();
    console.log(loginotp)
    Registration.findOneAndUpdate({ mobile: req.body.mobile },
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
                    "mobile": req.body.mobile,
                    "message": `${loginotp} is your OTP for PanditjiForMe.com login. Do not share OTP with anyone`
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

exports.verifyRegOTP = (req, res) => {
    logger.log(req.body.mobile);
    logger.log(req.body.otp);
    Registration.find({ mobile: req.body.mobile })
        .then(result => {
            //result is an array, array length must be 1
            console.log(result);
            if (result[0].otp == req.body.otp) {
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

exports.verifyLoginOTP = (req, res) => {
    logger.log(req.body.mobile);
    logger.log(req.body.otp);
    Registration.find({ mobile: req.body.mobile })
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

// For Booking Page
exports.findDetails = (req, res) => {
    console.log(req.body.mobile);
    Registration.find({ mobile: req.body.mobile })
        .then(details => {
            console.log(details);
            res.send(details);
        })
        .catch(err => {
            res.send(err);
        })
}

//For Profile Details and Profile Edit Page

//For Finding UserDetails using ObjectID
exports.findbyID = (req, res) => {
    console.log(req.body.userid)
    Registration.find({ _id: req.body.userid })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "user not found 1"
                });
            }
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found 2"
                });
            }
            return res.status(500).send({
                message: "user not found 3"
            });
        });
}

//For Updating User Details using objectID
exports.UpdateById = (req, res) => {
    Registration.findByIdAndUpdate({ _id: req.body.userid }, {
        zipcode: req.body.zipcode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
    }, { new: true })
        .then(update => {
            if (!update) {
                return res.status(404).send({
                    message: "service not found with id " + req.body.userid
                });
            }
            res.send(update);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "service not found with id " + req.body.userid
                });
            }
            return res.status(500).send({
                message: "Error updating service with id " + req.body.userid
            });
        });
}