module.exports = app => {
    const registration = require('../controllers/BeneficiarySignup.controller');


    
    app.post('/BResourceRegistration1/form1', registration.BregistrationStep1);
    app.post('/BVerifyResRegOtp1', registration.BverifyRegOTP1);
  
    app.post('/BVerifyResLoginOTP1', registration.BverifyOTP1);
    app.post('/BgenerateResLoginOtp1', registration.BgenerateResLoginOtp1);
    app.post('/BResourceRegistration/form3', registration.BregistrationStep3);

    app.post('/b34', registration.listofbene);
   
   
}