const MasterYear = require('../models/year.model') 

exports.create = (req, res) => {
    console.log("State controller is hitted"); 
    console.log(req.body);

    const masteryear = new MasterYear({

        year:req.body.Year,
      
       
    });

    masteryear.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}


exports.findAllyear = (req, res) => {
    // logger.trace("get all the speciality");
    MasterYear.find({},{ _id: 0, Year : 1  })
         .then(allitem => {
             res.send(allitem);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });
 }