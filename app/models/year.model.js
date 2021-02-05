const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const YearSchema = mongoose.Schema({
    year:String,
  
},
{
    timestamps: true  
});
module.exports = mongoose.model('Masteryear',YearSchema);
