const ItemMasterInfo = require('../models/Itemmaster.model') 

exports.create = (req, res) => {
    console.log("ItemMasterInfo controller is hitted"); 
    console.log(req.body);

    const itemsInfo = new ItemMasterInfo({
        Itemname: req.body.Itemname,
        Carbonfootprint: req.body.Carbonfootprint
      
    });

    itemsInfo.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}


// get all item
exports.findAllitem = (req, res) => {
    // logger.trace("get all the speciality");
     ItemMasterInfo.find({},{ _id: 0, Itemname : 1  })
         .then(allitem => {
             res.send(allitem);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });
 }