const applyGrievance = require("../models/GrivanceNodalofficer.model");



exports.create = (req, res) => {
    console.log("ContactInfo controller is hitted");
    console.log(req.body);

    const complaint = new applyGrievance({

        SerialNo: req.body.SerialNo,
        OFFICER_NAME: req.body.OFFICER_NAME,
        Authority_name:req.body.Authority_name,
        password:req.body.password
    });
    complaint.save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service",
            });
        });
};
exports.verifyAuthority = (req, res) => {
    console.log(req.body.SerialNo)
    console.log(req.body.password);
    applyGrievance.find({ SerialNo: req.body.SerialNo, password:req.body.password})
        .then(result => {
            //result is an array, array length must be 1
            console.log(result);
            if (result.length == 0) {
                res.send({
                    statusCode:400,
                    message:"Invalid login"
                })
            }
            else{              
                        res.send({
                    statusCode: 200,
                    message: "user verified",
                    // userID: result[0]._id,
                    // Name: result[0].Name,
                    // email: result[0].email,
                    // phoneNumber: result[0].phoneNumber,
                })
            }

            // if ( password === req.body.password) {
            //     res.send({
            //         statusCode: 200,
            //         message: "user verified",
            //         // userID: result[0]._id,
            //         // Name: result[0].Name,
            //         // email: result[0].email,
            //         // phoneNumber: result[0].phoneNumber,
            //     })
            // }
            // else {
            //     res.send({
            //         statusCode: 400,
            //         message: "wrong userid",
            //     })
            // }
        })
        .catch(err => {
            console.log(err);
        })
    }

exports.all_nodalofficerlist = (req, res) => {
    console.log("get all grievance");

    applyGrievance.find({})
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "can't fetch speciality",
            });
        });
};

