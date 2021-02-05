module.exports = app => {
    const registration = require('../controllers/Benefis');

    app.post('/ResourceRegistration1/form1', registration.registrationStep1);
    app.post('/VerifyResRegOtp1', registration.verifyRegOTP1);
   app.get('/LfindAllitem', registration.findAllitem);
    app.post('/VerifyResLoginOTP1', registration.verifyOTP1);
    app.post('/generateResLoginOtp1', registration.generateResLoginOtp1);
    

    //To Verify OTP 
  



}