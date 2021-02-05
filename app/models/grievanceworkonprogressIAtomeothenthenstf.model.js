const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const Grievanceworkonprogressotherthenstf = mongoose.Schema({
    
    userId: String,
    NameofComplainant: String,
    MobileNumber: Number,
    complaintCategory:String,
    complaintype:String,
    Address: String,
    ComplaintDescrption:String,
    status:String,
    remarks:String
      });
module.exports = mongoose.model('Grievanceworkonprogressotherthenstf', Grievanceworkonprogressotherthenstf);