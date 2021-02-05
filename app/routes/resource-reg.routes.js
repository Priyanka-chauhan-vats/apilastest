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
    const registration = require('../controllers/resource-reg.controller');

    app.post('/ResourceRegistration/form1', registration.registrationStep1);
    app.post('/VerifyResRegOtp', registration.verifyRegOTP);
 
    //app.post('/upload', upload.single('photo'), registration.upload);
    app.post('/ResourceRegistration/form3', registration.registrationStep3);
   
  
    //When PhoneNumber is posted this will generate OTP
    app.post('/generateResLoginOtp', registration.generateResLoginOtp);

    //To Verify OTP
    app.post('/VerifyResLoginOTP', registration.verifyOTP);
	
	app.post('/Donorprofilee', registration.donorsprofile);
    app.post('/DonorUpdatebyId', registration.donorsUpdateid);


   
}
