const Grievanceworkonprogressothenthenstf = require('../models/grievanceworkonprogressIAtomeothenthenstf.model');



exports.createothenthenstf = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const complaint = new Grievanceworkonprogressothenthenstf({
        _id: req.body._id,
        NameofComplainant: req.body.NameofComplainant,
        MobileNumber: req.body.MobileNumber,
        complaintCategory:req.body.complaintCategory,
        complaintype:req.body.complaintype,
        Address: req.body.Address,
       ComplaintDescrption:req.body.ComplaintDescrption,
    //    status:req.body.status,
        remarks:req.body.remarks,
        // Photo:req.body.Photo,
        status:'Assigned',
        tag:"Action No taken"


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




exports.grievanceworkonprogressdetailsothenthenstf = (req, res) => {
    console.log("DonorDetaInfo controller is hitted -- myorder"); 
    console.log(req.body._id);

    Grievanceworkonprogressothenthenstf.find({ _id: req.body._id})
        .then(my_order => {
            console.log("Resgistered user array");
            console.log(my_order);
            if (my_order.length == 0) {
                console.log("We Can Proceed with Registration");
				return res.status(400).send({
                    statusCode: 400,
                    message: 'NO Data founf'
                })
                
            }
            else {
                return res.status(200).send({
                    statusCode: 200,
                    message: 'Data Found',
					data:my_order
                })
            }
        })
}	
exports.all_workinprogressotherthenstf = (req, res) => {
    console.log("get all grievance");
    
    Grievanceworkonprogressothenthenstf.find({})
             .then(data => {
    console.log(data);
                 res.send(data);
             })
             .catch(err => {
                 res.status(500).send({
                     message: err.message || "can't fetch speciality"
                 });
             });
    
     } 
    
