const desealingGrievance = require('../models/grievanceDesealingform.model');



exports.create = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const desealing = new desealingGrievance ({
        NameofComplainant: req.body.NameofComplainant,
        EmailAddress: req.body.EmailAddress,
        MobileNumber: req.body.MobileNumber,
        Address:req.body.Address,
        ComplaintDescrption:req.body.ComplaintDescrption,
        JurisdictionOrgComplaint:req.body.JurisdictionOrgComplaint,
        ConcernedNodalOfficer:req.body.ConcernedNodalOfficer,
        Photo:req.body.Photo
    });
    desealing.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}















