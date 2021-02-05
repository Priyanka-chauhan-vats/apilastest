const grievancecomplaintlist = require('../models/grievanceComplaintList.model.js') 



exports.findAllstate = (req, res) => {
    // logger.trace("get all the speciality");
    console.log('aaya data');
    console.log(grievancecomplaintlist);
    grievancecomplaintlist.find({},{ _id: 1,sr : 1  })
         .then(allitem => {
             res.send(allitem);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });
 }