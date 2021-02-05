module.exports = app => {
    const registration = require('../controllers/Admin.controller');
    app.post('/AResourceRegistration1/form1', registration.AregistrationStep1);
    app.post('/AVerifyResRegOtp1', registration.AverifyRegOTP1);
 
    app.post('/AVerifyResLoginOTP1', registration.AverifyOTP1);
    app.post('/AgenerateResLoginOtp1', registration.AgenerateResLoginOtp1);
    app.post('/listofdoner', registration.listofdoner);

    app.post('/content_change', registration.content_change);
    app.post('/get_homecontent', registration.get_homecontent);
    
    app.post('/getSlider', registration.get_slider);
    
    
    app.post('/delete_slider',registration.delete1);
 
   
}
