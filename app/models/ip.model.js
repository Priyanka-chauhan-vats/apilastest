const mongoose = require('mongoose');

const IpSchema = mongoose.Schema({
    system_ip: String,
    system_network: String
   
   
   
}, {
        timestamps: true
    });

module.exports = mongoose.model('ip', IpSchema);
