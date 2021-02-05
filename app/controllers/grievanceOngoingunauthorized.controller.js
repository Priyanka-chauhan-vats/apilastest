const   ongoingunauthorizedGrievance = require('../models/grievanceOngoingunauthorized.model');



exports.create = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const complaint = new ongoingunauthorizedGrievance ({
        NameofComplainant: req.body.NameofComplainant,
        EmailAddress: req.body.EmailAddress,
        MobileNumber: req.body.MobileNumber,
        Address:req.body.Address,
        ComplaintDescrption:req.body.ComplaintDescrption,
        JurisdictionOrgComplaint:req.body.JurisdictionOrgComplaint,
        ConcernedNodalOfficer:req.body.ConcernedNodalOfficer,
        Photo:req.body.Photo
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















