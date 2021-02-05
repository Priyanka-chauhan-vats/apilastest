module.exports = app => {
    const registration = require('../controllers/Dealer.controller');
    app.post('/DResourceRegistration1/form1', registration.DregistrationStep1);
    app.post('/DVerifyResRegOtp1', registration.DverifyRegOTP1);
 
    app.post('/DVerifyResLoginOTP1', registration.DverifyOTP1);
    app.post('/DgenerateResLoginOtp1', registration.DgenerateResLoginOtp1);
    app.post('/DResourceRegistration/form3', registration.DregistrationStep3);
app.post('/listofbeneficiary', registration.listofbeneficiary);

app.post('/Dealerprofilee', registration.dealersprofile);
    app.post('/DealerUpdatebyId', registration.dealersUpdateid);

 
   
}