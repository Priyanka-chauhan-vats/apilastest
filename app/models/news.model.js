
const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;


const news = mongoose.Schema({
   
    cnews: String,
  
   
});



module.exports = mongoose.model('tblNew', news);