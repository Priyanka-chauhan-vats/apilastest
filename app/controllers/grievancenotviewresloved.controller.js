const Grievancresloved = require('../models/grievancenotviewResloved.model');



exports.create = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const complaint = new Grievancresloved({
        _id: req.body._id,
        JurisdictionPolicestation:req.body.JurisdictionPolicestation,
        Zonalplan: req.body.Zonalplan,
        DateofAction: req.body.DateofAction,
        DateofDemolition: req.body.DateofDemolition,
        UnderProcess: req.body.UnderProcess,
        yesselecteddropdown:req.body.yesselecteddropdown,
        yesSelectedDAteofAction:req.body.yesSelectedDAteofAction,
        Actiontakendetails:req.body.Actiontakendetails,
        Noselecteddropdown:req.body.Noselecteddropdown,
        NoselectedOtherAction:req.body.NoselectedOtherAction,
        NoselecteddateofAction:req.body.NoselecteddateofAction,
       


    });
    complaint.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}




