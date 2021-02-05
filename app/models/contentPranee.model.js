
const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;


const ContentHome = mongoose.Schema({
   
    pranee: String,
   
});



module.exports = mongoose.model('content_pranee', ContentHome);





