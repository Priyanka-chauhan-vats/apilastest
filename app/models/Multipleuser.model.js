const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;


const MAResourceRegistrationSchema = mongoose.Schema({
    userId: ObjectId,
    title:String,
    Name: String,
    email: String,
    phoneNumber: Number,
    OTP: Number,
    login_otp:Number,
    RegOTP: Number,
    Message:String
});



module.exports = mongoose.model('multipleuser', MAResourceRegistrationSchema);