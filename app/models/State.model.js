const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const StateSchema = mongoose.Schema({
    StateName:String,
   StateCode:String
},
{
    timestamps: true  
});
module.exports = mongoose.model('MasterState',StateSchema);

