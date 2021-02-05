module.exports = app => {
    const registration = require('../controllers/DealerSignin');


    
    app.post('/DBResourceRegistration1/form1', registration.DBregistrationStep1);
    app.post('/DBVerifyResRegOtp1', registration.DBverifyRegOTP1);
  
    app.post('/DBVerifyResLoginOTP1', registration.DBverifyOTP1);
    app.post('/DBgenerateResLoginOtp1', registration.DBgenerateResLoginOtp1);
    app.post('/DBResourceRegistration/form3', registration.DBregistrationStep3);
   
}