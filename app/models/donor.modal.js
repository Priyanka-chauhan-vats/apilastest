const mongoose = require('mongoose');

const DonorSchema = mongoose.Schema({
    Username:String,
    Email: String,
    Phoneno: Number ,
    otp: Number
}, {
        timestamps:true
    });
module.exports = mongoose.model('donor', DonorSchema);