const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    Name:String,
    Email: String,
    Subject: String,
    Message:String
}, {
        timestamps:true
    });
module.exports = mongoose.model('contact', ContactSchema);