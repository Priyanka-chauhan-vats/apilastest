const mongoose = require('mongoose');

const RegSchema = mongoose.Schema({
    firstName: String,
    
    mobile: Number,
    email: String,
    password: String,
    otp: Number,//Verification OTP
    login_otp: Number,//Login OTP
    //Saved After First Booking
   
}, {
        timestamps: true
    });

module.exports = mongoose.model('Reg', RegSchema);