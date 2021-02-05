const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;


const BResourceRegistrationSchema = mongoose.Schema({
    userId: ObjectId,
    Name: String,
    email: String,
    phoneNumber: Number,
    OTP: Number,
    login_otp:Number,
    RegOTP: Number,

    pincode:Number,
    City:String,
    State:String,
    Location:String,
});



module.exports = mongoose.model('dealerreg', BResourceRegistrationSchema);