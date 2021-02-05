const mongoose = require('mongoose');

const DocSchema = mongoose.Schema({
    username:String,
    password: String,
    MobileNo: Number,
    email:String,
    address:String
}, {
        timestamps:true
    });
module.exports = mongoose.model('docreg', DocSchema);