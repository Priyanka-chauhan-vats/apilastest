const mongoose = require('mongoose');

const DocSchema = mongoose.Schema({
    username:String,
    password: String,
    MobileNo: Number,
    email:String,
    address:String,
    state:String,
    landmark:String,
    city:String,
    pincode:Number
}, {
        timestamps:true
    });
module.exports = mongoose.model('diagonesticreg', DocSchema);