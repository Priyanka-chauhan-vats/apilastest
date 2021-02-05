const mongoose = require('mongoose');

const DonordSchema = mongoose.Schema({
    Itemname: String,
    Unit:String,
    Quantity: String,
    Location:String,
    Availabledate:Date,
user_id:String
   
}, {
        timestamps:true
    });
module.exports = mongoose.model('donordetailform', DonordSchema);
