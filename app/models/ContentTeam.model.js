

const mongoose =require('mongoose');
const ContentTeam=mongoose.Schema({
    ourteam:String,
    women:String,
    environment:String,
    counselling:String,
    funding:String,
    faq:String,
    rsnb:String,

});
module.exports=mongoose.model('tblteam', ContentTeam);