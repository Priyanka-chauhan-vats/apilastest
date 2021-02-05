const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;



const BeneficiarysignupRegistrationSchema = mongoose.Schema({
    userId: ObjectId,
    Name: String,
    email: String,
    phoneNumber: Number,
    OTP: Number,
    login_otp:Number,
    RegOTP: Number,
    BPL:String,
    FatherName:String,
    Marks12:String,
    passingyear:String,
    pincode:Number,
    City:String,
    State:String
});



module.exports = mongoose.model('beneficiarySignup', BeneficiarysignupRegistrationSchema);