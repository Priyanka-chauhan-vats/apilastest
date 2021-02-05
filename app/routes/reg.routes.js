module.exports = app => {
    const reg = require('../controllers/reg.controller.js');
    const otp = require('../controllers/otp.controller.js');

    //new registration
    app.post('/registration', reg.create);

    //Verify OTP(Deprecated)
    app.post('/OTP', otp.verify);

    //When PhoneNumber is posted this will generate OTp
    app.post('/generateLoginOtp', registration.generateLoginOtp)

    //Verify OTP (in Use)
    app.post('/verifyOTP', registration.verifyOTP)

    //fetch details for Billing Page
    app.post('/fetchDetailsUsingMobile', registration.findDetails)

    //Fetch Details Using ObjectId
    app.post('/fetchDetailsUsingId',registration.findbyID)

    //Update Details Using ObjectID
    app.post('/UpdateDetailsUsingId', registration.UpdateById)
}