const mongoose = require('mongoose');

const UsertypeScheme = mongoose.Schema({
    title: String
	}, {
        timestamps: true
    });

module.exports = mongoose.model('Usertype', UsertypeScheme);