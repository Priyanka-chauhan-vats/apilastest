const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const StateSchema = mongoose.Schema({
    sr:String,
    name:String,
    Time:String,
    apply:String
},
{
    timestamps: true  
});
module.exports = mongoose.model('grievanceComplaintlist',StateSchema);

