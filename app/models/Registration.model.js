
const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: Number,
    email: String,
    password: String,
    lotp: Number,//Verification OTP
    login_otp: Number,//Login OTP
    //Saved After First Booking
    zipcode: Number,
    address: String,
    city: String,
    state: String
}, {
        timestamps: true
    });

module.exports = mongoose.model('Registration', RegistrationSchema);