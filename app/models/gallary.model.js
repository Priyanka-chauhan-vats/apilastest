const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;


const gallarySchema = mongoose.Schema({
   
    Image_name: String,
    Image_url: String
   
});



module.exports = mongoose.model('Grievancegallary', gallarySchema);