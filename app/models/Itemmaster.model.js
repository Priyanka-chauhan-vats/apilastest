const mongoose = require('mongoose');

const ItemmSchema = mongoose.Schema({
    Itemname: String,
    Carbonfootprint: String
    
}, {
        timestamps:true
    });
module.exports = mongoose.model('itemmaster', ItemmSchema);