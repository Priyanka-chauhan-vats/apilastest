const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceBuildingbyelawsForm = mongoose.Schema({
    
    userId: ObjectId,
    NameofComplainant: String,
    EmailAddress: String,
    MobileNumber: Number,
    Address: String,
    ComplaintDescrption:String,
    JurisdictionOrgComplaint: String,
    ConcernedNodalOfficer:String,
    Photo:String,
    
      });
module.exports = mongoose.model('GrievanceBuildingbyelawsForm', GrievanceBuildingbyelawsForm);