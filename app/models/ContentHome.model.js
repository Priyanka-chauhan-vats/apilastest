
const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;


const ContentHome = mongoose.Schema({
   
    home: String,
   
});



module.exports = mongoose.model('content_home', ContentHome);





