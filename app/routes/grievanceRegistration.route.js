const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'ResourceDoc/')
    },
    filename: function (req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now())
        cb(null, file.originalname + '-' + Date.now())
    }
})
const upload = multer({ storage: storage })
//const upload = multer({ dest: 'abcd/' })

module.exports = app => {
    const registration = require('../controllers/grievanceRegistration.controller');

    app.post('/GrievanceResourceRegistration/form1', registration.registrationStep1);
    app.post('/GrievanceVerifyResRegOtp', registration.verifyRegOTP);
    
  
    //When PhoneNumber is posted this will generate OTP
    app.post('/GrievancegenerateResLoginOtp', registration.generateResLoginOtp);

    //To Verify OTP
    app.post('/GrievanceVerifyResLoginOTP', registration.verifyOTP);
	



   
}
