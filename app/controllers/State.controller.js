const MasterState = require('../models/State.model.js') 

exports.create = (req, res) => {
    console.log("State controller is hitted"); 
    console.log(req.body);

    const masterstate = new MasterState({

        StateName:req.body.StateName,
        StateCode:req.body.StateCode
       
    });

    masterstate.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}


exports.findAllstate = (req, res) => {
    // logger.trace("get all the speciality");
    MasterState.find({},{ _id: 0, StateName : 1  })
         .then(allitem => {
             res.send(allitem);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });
 }