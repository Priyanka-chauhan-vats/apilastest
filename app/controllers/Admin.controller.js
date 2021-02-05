

const ResourceReg = require('../models/Admin.model');
const DonerModel = require('../models/resource-reg.model');
const Contenthome = require('../models/ContentHome.model');
const Slider = require('../models/slider.model'); 

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


//Registration 1
exports.AregistrationStep1 = (req, res) => {
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
                    "message": `${Otp} is your OTP for ngo org.com login. Do not share OTP with anyone`
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
exports.AgenerateResLoginOtp1 = (req, res) => {
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
                    "message": `${loginotp} is your OTP for ngo org.com login. Do not share OTP with anyone`
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
exports.AverifyOTP1 = (req, res) => {
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
                    userID: result[0]._id,
                    name: result[0].Name,
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
exports.AverifyRegOTP1 = (req, res) => {
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

exports.listofdoner = (req, res) => {
console.log("List of Doner");
    DonerModel.find({ })
         .then(my_order => {
if (my_order.length == 0) {
                console.log("We Can Proceed with Registration");
return res.status(400).send({
                    statusCode: 400,
                    message: 'NO Data found'
                })
               
            }
            else {
                return res.status(200).send({
                    statusCode: 200,
                    message: 'Data Found',
data:my_order
                })
            }
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });


 }

exports.content_change = (req, res) => {
console.log("Home Content update controller hite!!");
console.log(req.body.home_content);



Contenthome.find({ })
         .then(content => {
             console.log(content);
if (content.length == 0) {
               const contenthome = new Contenthome({
home: req.body.home_content      
});

contenthome.save()
        .then(data => {
            console.log(content);
res.send({
                    statusCode: 200,
                    message: "Data Found",
                    data: data
                })

           
        })
        .catch(err => {
            logger.log(err)
            res.send(err)
        })
               
            }
            else {
Contenthome.findOneAndUpdate({ home: req.body.home_content })
        .then(data => {
res.send({
                    statusCode: 200,
                    message: "Data Found",
                    data: data
                })

           
        })
        .catch(err => {
            logger.log(err)
            res.send(err)
        })
               
            }
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });


 }
 
 exports.get_homecontent = (req, res) => {
console.log("get_homecontent");
    Contenthome.find({ })
         .then(content => {
if (content.length == 0) {
                console.log("We Can Proceed with content");
return res.status(400).send({
                    statusCode: 400,
                    message: 'NO Data found'
                })
               
            }
            else {
                return res.status(200).send({
                    statusCode: 200,
                    message: 'Data Found',
data:content
                })
            }
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });


 }


 exports.get_slider = (req, res) => {
    console.log("get_slider");
        Slider.find({ })
             .then(content => {
    if (content.length == 0) {
    console.log("We Can Proceed with Gallaery");
    return res.status(400).send({
    statusCode: 400,
    message: 'NO Data found'
    })
                   
            }
    else {
    return res.status(200).send({
    statusCode: 200,
    message: 'Data Found',
    data:content
    })
    }
    })
    .catch(err => {
    res.status(500).send({
    message: err.message || "can't fetch speciality"
    });
    });
    
    
     }



     
exports.delete1 = (req, res) => {
    console.log(req.body);
    Slider.deleteOne({ _id: req.body.id })
             .then(content => {
    if (content.length == 0) {
    console.log("We Can Proceed with Gallaery");
    return res.status(400).send({
    statusCode: 400,
    message: 'NO Data found'
    })
                   
            }
    else {
    return res.status(200).send({
    statusCode: 200,
    message: 'Data Found'
    
    })
    }
    })
    .catch(err => {
    res.status(500).send({
    message: err.message || "can't fetch speciality"
    });
    });
    
    
     }





