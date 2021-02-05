const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceNodalofficer = mongoose.Schema({
  userId: ObjectId,
 SerialNo:String,
 OFFICER_NAME:String,
 Authority_name:String,
 password:String
});
module.exports = mongoose.model(
  "GrievanceNodalofficer",GrievanceNodalofficer
  
);
