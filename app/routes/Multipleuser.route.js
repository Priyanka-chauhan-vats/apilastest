module.exports = app => {
    const registration = require('../controllers/Multipleuser.controller');
    app.post('/MAResourceRegistration1/form1',registration.MAregistrationStep1);
    app.post('/MAVerifyResRegOtp1', registration.MAverifyRegOTP1);
  
    app.post('/MAVerifyResLoginOTP1', registration.MAverifyOTP1);
    app.post('/MAgenerateResLoginOtp1', registration.MAgenerateResLoginOtp1);
    app.post('/MAregistrationStep3' ,registration.MAregistrationStep3);
    app.post('/ListRWAs' ,registration.ListRWA);
  
   
}