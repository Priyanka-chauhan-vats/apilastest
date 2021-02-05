const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceNotViewresloved = mongoose.Schema({

    userId: String,
    JurisdictionPolicestation: String,
    Zonalplan: String,
    DateofAction:Date,
    DateofDemolition:Date,
    UnderProcess: String,
    yesselecteddropdown: String,
    yesSelectedDAteofAction:Date,
    Actiontakendetails: String,
    Noselecteddropdown: String,
    NoselectedOtherAction: String,
    NoselecteddateofAction:Date,

});
module.exports = mongoose.model('GrievanceNotViewresloved', GrievanceNotViewresloved);