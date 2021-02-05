
const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;


const Contentvision = mongoose.Schema({
   
    vision: String,
    hostbene:String
 
   
});



module.exports = mongoose.model('content_vision', Contentvision);