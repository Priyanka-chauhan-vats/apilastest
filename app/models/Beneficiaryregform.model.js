const mongoose = require('mongoose');

const BeneSchema = mongoose.Schema({
    Firstname:String,
    Lastname: String,
    Fathername: String,
    Mothername:String,
    Dob:Date,
    Pancardno: String,
    Email: String,
    Mobileno:Number,
    Martialstatus:String,
    Gender:Number,
    Qualification:String,
    Annualincome:String,
    Fatheroccupation:String,
    State:String,
    City:String,
    Currentaddress:String,
    Permanentaddress:String,
    Uploadphoto:String,
    Uploaddocument:String,
    Mystory:String
  

}, {
        timestamps:true
    });
module.exports = mongoose.model('beneficiaryreg', BeneSchema);