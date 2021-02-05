const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const AuthorityRegistrationSchema = mongoose.Schema({
    //Registration 1.

    userId: ObjectId,
    Name: String,
    email: String,
    phoneNumber: Number,
    OTP: Number,

    login_otp:Number,

    //Registration 2.
    RegOTP: Number,
    password:String,

    // Registration 3.
  
    
    pincode:Number,
    City:String,
    State:String,
    Location:String,
   rwa_status:String
  

    //Registration 4.
   
});
module.exports = mongoose.model('grievanceAuthorityregistration', AuthorityRegistrationSchema);