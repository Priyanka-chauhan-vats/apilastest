
const mongoose =require('mongoose');


const DonorSignup1 = mongoose.Schema({
    name:String,
    username:String,
    password:String,
});

module.exports = mongoose.model('tblAdmin', DonorSignup1);