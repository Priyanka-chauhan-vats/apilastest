const applyGrievance = require('../models/grievanceotherthenSTF.model');
const reopencompalint =require('../models/Grievancereopencomplainttherthenstf.model')
const grievanceViewcomplaint = require('../models/grievanceViewcomplainOtherthenstf.model')


exports.create = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const complaint = new applyGrievance ({
        NameofComplainant: req.body.NameofComplainant,
        MobileNumber: req.body.MobileNumber,
        complaintCategory:req.body.complaintCategory,
        complaintype:req.body.complaintype,
        Address: req.body.Address,
       ComplaintDescrption:req.body.ComplaintDescrption,
       status:"Assigned"
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
exports.create2 = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const complaint = new reopencompalint ({
        _id: req.body._id,
        NameofComplainant: req.body.NameofComplainant,
        MobileNumber: req.body.MobileNumber,
        complaintCategory:req.body.complaintCategory,
        complaintype:req.body.complaintype,
        Address: req.body.Address,
       ComplaintDescrption:req.body.ComplaintDescrption,
       status:"Re-open"
 });
    complaint.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
        applyGrievance.deleteOne({_id: req.body._id })
        .then(content => {
if (content.length == 0) {
console.log("We Can Proceed with Gallaery");
return res.status(400).send({
statusCode: 400,
message: 'NO Data found'
})
              
       }
else {
return res.status(200).send({
statusCode: 200,
message: 'Data Found'

})
}
})
.catch(err => {
res.status(500).send({
message: err.message || "can't fetch speciality"
});
});
}
exports.applyviewgrievance = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const complaint = new grievanceViewcomplaint ({
        _id: req.body._id,
        NameofComplainant: req.body.NameofComplainant,
        MobileNumber: req.body.MobileNumber,
        complaintCategory:req.body.complaintCategory,
        complaintype:req.body.complaintype,
        Address: req.body.Address,
       ComplaintDescrption:req.body.ComplaintDescrption,
       status:"View"


    });
    complaint.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
        applyGrievance.deleteOne({_id: req.body._id })
             .then(content => {
    if (content.length == 0) {
    console.log("We Can Proceed with Gallaery");
    return res.status(400).send({
    statusCode: 400,
    message: 'NO Data found'
    })
                   
            }
    else {
    return res.status(200).send({
    statusCode: 200,
    message: 'Data Found'
    
    })
    }
    })
    .catch(err => {
    res.status(500).send({
    message: err.message || "can't fetch speciality"
    });
    });
    
    
        }

exports.grievanceviewdetailsotherthenstf = (req, res) => {
    console.log("DonorDetaInfo controller is hitted -- myorder"); 
    console.log(req.body._id);

    applyGrievance.find({ _id: req.body._id})
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
exports.viewdetailsotherthenstf = (req, res) => {
    console.log("DonorDetaInfo controller is hitted -- myorder"); 
    console.log(req.body._id);

    grievanceViewcomplaint.find({ _id: req.body._id})
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


     exports.all_grivencelistotherthenstf = (req, res) => {
        console.log("get all grievance");
        
        applyGrievance.find({})
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
         exports.all_grivencereopenotherthenstf = (req, res) => {
            console.log("get all grievance");
            
            reopencompalint.find({})
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
           

             exports.all_grivencelistotherthenstfViewed = (req, res) => {
                console.log("get all grievance");
                
                grievanceViewcomplaint.find({})
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
            













