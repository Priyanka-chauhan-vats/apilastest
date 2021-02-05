const BeneRInfo = require('../models/Beneficiaryregform.model') 

exports.create = (req, res) => {
    console.log("BeneRInfo controller is hitted"); 
    console.log(req.body);

    const BeneRInfos = new BeneRInfo({
    
        Firstname:req.body.Firstname,
        Lastname: req.body.Lastname,
        Fathername: req.body.Fathername,
        Mothername:req.body.Mothername,
        Dob:req.body.Dob,
        Pancardno: req.body.Pancardno,
        Email: req.body.Email,
        Mobileno:req.body.Mobileno,
        Martialstatus:req.body.Martialstatus,
        Gender:req.body.Gender,
        Qualification:req.body.Qualification,
        Annualincome:req.body.Annualincome,
        Fatheroccupation:req.body.Fatheroccupation,
        State:req.body.State,
        City:req.body.City,
        Currentaddress:req.body.Currentaddress,
        Permanentaddress:req.body.Permanentaddress,
        Uploadphoto:req.body.Uploadphoto,
        Uploaddocument:req.body.Uploaddocument,
        Mystory:req.body.Mystory

    });

    BeneRInfos.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}