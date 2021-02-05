const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceapplyForm = mongoose.Schema({
    
    userId: ObjectId,
    
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
    password:String,
    Photo:String,
    tag:String,
    status:String
      });
module.exports = mongoose.model('GrievanceapplyForm', GrievanceapplyForm);