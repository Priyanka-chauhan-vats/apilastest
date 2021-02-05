const DocInfo1 = require('../models/Doctorregistration.model') 

exports.create = (req, res) => {
    console.log("DocInfo controller is hitted"); 
    console.log(req.body);

    const DocInfo = new DocInfo1({
        username: req.body.username,
        password: req.body.password,
        MobileNo: req.body.MobileNo,
        email:req.body.email,
        address:req.body.address
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