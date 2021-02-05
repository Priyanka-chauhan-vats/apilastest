const MedicalRegInfo = require('../models/MedicalCenterReg.model') 

exports.create = (req, res) => {
    console.log("MedicalRegInfo controller is hitted"); 
    console.log(req.body);

    const DocInfo = new MedicalRegInfo({
        username: req.body.username,
        password: req.body.password,
        MobileNo: req.body.MobileNo,
        email:req.body.email,
        address:req.body.address,
        state:req.body.state,
        landmark:req.body.landmark,
        city:req.body.city,
        pincode:req.body.pincode

    });

    DocInfo.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}