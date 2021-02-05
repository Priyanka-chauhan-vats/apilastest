const ApiTesting = require('../models/Demo.model');
var ObjectId= require('mongoose').Types.ObjectId;

exports.getAll=(req,res) =>{
    console.log("Apidata fetch controller hitted");
   
    ApiTesting.find()
    .then((ApiTesting)=>{
        res.send(ApiTesting)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Not Receiving"
        });
    })
}


exports.create = (req, res) => {
    console.log("ApiTesting controller is hitted");
   
    console.log(req.body);

    const apitesting = new ApiTesting({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    });

    apitesting.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}
exports.find = (req,res) => {

}

exports.updateApi= (req, res) => {
    console.log("update service");
    console.log(req.body);
    //console.log(req.body.id);
    

    let updatedDemo = {
        id: req.body.id,
        name: req.body.name,
        age:req.body.age     
    }
    console.log(req.body.id);
    console.log(req.body.id);

    ApiTesting.findOneAndUpdate(req.body.id,
        updatedDemo,
        { new: true })
        .then(data => {
            console.log(data);
            if (!data) {
                return res.status(404).send({
                    message: "1 data not found with id " + req.body.id
                });
            }
            res.send(data);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "2 data not found with id " + req.body.id
                });
            }
            console.log(err)
            return res.status(500).send({
                message: "Error updating data with id " + req.body.id
            });
        });
}


