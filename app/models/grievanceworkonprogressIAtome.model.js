const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceworkonprogressIAtome = mongoose.Schema({
    
    userId: String,
    complaint:String,
    NameofComplainant: String,
    EmailAddress: String,
    MobileNumber: Number,
    Address: String,
    gender:String,
    ComplaintDescrption:String,
    JurisdictionOrgComplaint: String,
    ConcernedNodalOfficer:String,
    Photo:String,
    tag:String,
    status:String,
    remarks:String
      });
module.exports = mongoose.model('GrievanceworkonprogressIAtome', GrievanceworkonprogressIAtome);