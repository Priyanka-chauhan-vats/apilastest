const applyGrievance = require("../models/grievanceApply.model");

const grievanceViewcomplaint = require("../models/grievanceViewcomplaint.model");

exports.create = (req, res) => {
  console.log("ContactInfo controller is hitted");
  console.log(req.body);

  const { officerserialnumber } = req.body;

  const complaint = new applyGrievance({
    complaint: req.body.complaint,
    NameofComplainant: req.body.NameofComplainant,
    EmailAddress: req.body.EmailAddress,
    MobileNumber: req.body.MobileNumber,
    Address: req.body.Address,
    gender: req.body.gender,
    ComplaintDescrption: req.body.ComplaintDescrption,
    JurisdictionOrgComplaint: req.body.JurisdictionOrgComplaint,
    ConcernedNodalOfficer: req.body.ConcernedNodalOfficer,
    CurrentlyAssignedTo: officerserialnumber,
    officerserialnumber: req.body.officerserialnumber,
    // Photo:req.body.Photo,
    status: "Assigned",
    tag: "Action No taken",
    history: [
      {
        OfficerID: officerserialnumber,
        AssignmentDate: Date.now(),
        FirstOpenDate: -1,
        LastOpenDate: -1,
        AssignedBy: -1, // -1 Means Assigned by public
        Remarks: "",
      },
    ],
  });
  complaint
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while adding new service",
      });
    });
};

exports.update = (req, res, next) => {
  try {
    const {
      ComplaintId: _id,
      assignTo,
      AssignedBy,
      historyID,
      remarks,
    } = req.body;
    applyGrievance.updateOne(
      { _id: _id },
      {
        CurrentlyAssignedTo: assignTo,
        $push: { history: { AssignedBy: AssignedBy } },
      },
      (error, success) => {
        if (error) {
          res.status(400).send({ message: "error" });

          console.log("controller.js ~ line 60 ~ error", error);
        }
        console.log("controller.js ~ line 59 ~ success", success);
        res.send({ hello: "world", success });
      }
    );
  } catch (error) {
    next(error);
  }
};

exports.create2 = (req, res) => {
  console.log("ContactInfo controller is hitted");
  console.log(req.body);

  const complaint = new grievanceViewcomplaint({
    _id: req.body._id,
    complaint: req.body.complaint,
    NameofComplainant: req.body.NameofComplainant,
    EmailAddress: req.body.EmailAddress,
    MobileNumber: req.body.MobileNumber,
    Address: req.body.Address,
    gender: req.body.gender,
    ComplaintDescrption: req.body.ComplaintDescrption,
    JurisdictionOrgComplaint: req.body.JurisdictionOrgComplaint,
    ConcernedNodalOfficer: req.body.ConcernedNodalOfficer,
    officerserialnumber: req.body.officerserialnumber,
    // Photo:req.body.Photo,
    status: "Assigned",
    tag: "Action No taken",

    // Photo:req.body.Photo,
    // status:'Assigned',
    // tag:"Action No taken"
  });
  complaint
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while adding new service",
      });
    });
  applyGrievance
    .deleteOne({ _id: req.body._id })
    .then((content) => {
      if (content.length == 0) {
        console.log("We Can Proceed with Gallaery");
        return res.status(400).send({
          statusCode: 400,
          message: "NO Data found",
        });
      } else {
        return res.status(200).send({
          statusCode: 200,
          message: "Data Found",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "can't fetch speciality",
      });
    });
};

exports.grievancenotviewdetails = (req, res) => {
  console.log("DonorDetaInfo controller is hitted -- myorder");
  console.log(req.body._id);

  applyGrievance.find({ _id: req.body._id }).then((my_order) => {
    console.log("Resgistered user array");
    console.log(my_order);
    if (my_order.length == 0) {
      console.log("We Can Proceed with Registration");
      return res.status(400).send({
        statusCode: 400,
        message: "NO Data founf",
      });
    } else {
      return res.status(200).send({
        statusCode: 200,
        message: "Data Found",
        data: my_order,
      });
    }
  });
};
exports.grievanceviewdetails = (req, res) => {
  console.log("DonorDetaInfo controller is hitted -- myorder");
  console.log(req.body._id);

  grievanceViewcomplaint.find({ _id: req.body._id }).then((my_order) => {
    console.log("Resgistered user array");
    console.log(my_order);
    if (my_order.length == 0) {
      console.log("We Can Proceed with Registration");
      return res.status(400).send({
        statusCode: 400,
        message: "NO Data founf",
      });
    } else {
      return res.status(200).send({
        statusCode: 200,
        message: "Data Found",
        data: my_order,
      });
    }
  });
};

exports.all_grivencelist = (req, res) => {
  console.log("get all grievance");

  applyGrievance
    .find({})
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
exports.all_grivencelistviewcomaplaint = (req, res) => {
  console.log("get all grievance");

  grievanceViewcomplaint
    .find({})
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
//  exports.grivenceDetails = (req, res) => {
//     console.log("get  grievance");

//     applyGrievance.find({})
//              .then(data => {
//     console.log(data);
//                  res.send(data);
//              })
//              .catch(err => {
//                  res.status(500).send({
//                      message: err.message || "can't fetch speciality"
//                  });
//              });

//      }
