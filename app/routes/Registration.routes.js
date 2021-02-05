module.exports = app => {
    const registration = require('../controllers/Registration.controller');
    const otp = require('../controllers/otp.controller.js');

    //new registration
    app.post('/registration', registration.create);

    //Verify OTP(Deprecated)
    app.post('/OTP', otp.verify);

    //When PhoneNumber is posted this will generate OTp
    app.post('/generateLoginOtp', registration.generateLoginOtp)

    //Verify OTP (in Use)
    app.post('/verifyOTP', registration.verifyLoginOTP)

    //fetch details for Billing Page using Mobile Number when user in not logged In.
    app.post('/fetchDetailsUsingMobile', registration.findDetails)

    //Fetch Details Using ObjectId
    app.post('/fetchDetailsUsingId',registration.findbyID)

    //Update Details Using ObjectID
    app.post('/UpdateDetailsUsingId', registration.UpdateById)
}