const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceapplyForm = mongoose.Schema({
  userId: ObjectId,

  complaint: String,
  NameofComplainant: String,
  EmailAddress: String,
  MobileNumber: Number,
  Address: String,
  gender: String,
  ComplaintDescrption: String,
  JurisdictionOrgComplaint: String,
  ConcernedNodalOfficer: String,
  CurrentlyAssignedTo: String,
  officerserialnumber: String,
  password: String,
  Photo: String,
  tag: String,
  status: String,
  history: [
    {
      OfficerID: String,
      AssignmentDate: { type: Date },
      FirstOpenDate: { type: Date },
      LastOpenDate: { type: Date },
      AssignedBy: String,
      Remarks: String,
    },
  ],
});
module.exports = mongoose.model("GrievanceapplyForm", GrievanceapplyForm);
