const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const Grievancesendcomment = mongoose.Schema({

    userId: String,
   comment: String,
    

});
module.exports = mongoose.model('Grievancesendcomment', Grievancesendcomment);