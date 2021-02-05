const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;



const DBeneficiarysignupRegistrationSchema = mongoose.Schema({
    userId: ObjectId,
    Name: String,
    email: String,
    phoneNumber: Number,
    OTP: Number,
    login_otp:Number,
    RegOTP: Number,
	  AadharCard:String,
    Address:String,
  
    
    City:String,
    State:String
});



module.exports = mongoose.model('dealersignin', DBeneficiarysignupRegistrationSchema);