const sendcomment = require('../models/grievancesendcomment.model');



exports.create = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const complaint = new sendcomment({
        _id: req.body._id,
        comment:req.body.comment       


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















