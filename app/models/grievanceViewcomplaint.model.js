const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceViewComplaint = mongoose.Schema({
    
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
    officerserialnumber:String,
    Photo:String,
    tag:String,
    status:String
      });
module.exports = mongoose.model('GrievanceViewComplaint', GrievanceViewComplaint);