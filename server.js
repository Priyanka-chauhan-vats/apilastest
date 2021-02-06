const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./config/database.config.js");
const Gallary = require("./app/models/gallary.model");
const Slider = require("./app/models/slider.model");
var fileupload = require("express-fileupload");
// create express app
const app = express();
app.use(fileupload());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
//app.use(cors());
app.use(cors());

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully Connected to DataBase");
  })
  .catch((err) => {
    console.log("Could not connect to Database", err);
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({ Key: "Value" });
});

app.post("/uploadfile", function (req, res, next) {
  const file = req.files.file;
  console.log(req.files);

  file.mv("./uploadfile/" + file.name, function (err, result) {
    if (err) throw err;
    res.send({
      success: true,
      message: "file upload",
    });
  });
});
//  var path = require('path');
//  app.use("/public", express.static(path.join(__dirname, 'public')));

var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
app.post("/upload_gallery", multipartMiddleware, function (req, resp) {
  var cloudinary = require("cloudinary").v2;
  cloudinary.config({
    cloud_name: "deb9cwxor",
    api_key: "213141794874964",
    api_secret: "LwM4bhzlk2SQyP7JWPlQxSZoUTw",
  });
  file = req.files.photo;
  console.log(file);
  cloudinary.uploader.upload(file.path, function (err, result) {
    console.log("Error: ", err);
    console.log("Result: ", result);
    console.log(result.url);
    console.log(result.original_filename);
    const gallary = new Gallary({
      Image_name: result.original_filename,
      Image_url: result.url,
    });
    gallary
      .save()
      .then((data) => {})
      .catch((err) => {
        return resp.status(500).send({
          message: err.message || "error occured while, registering new user",
        });
      });
    console.log("Sucess");
    return resp.status(200).send({
      status_code: 200,
      mediaName: result.original_filename,
      origMediaName: result.original_filename,
      mediaSource: result.url,
    });
  });
});
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
app.post("/upload_slider", multipartMiddleware, function (req, resp) {
  var cloudinary = require("cloudinary").v2;
  cloudinary.config({
    cloud_name: "deb9cwxor",
    api_key: "213141794874964",
    api_secret: "LwM4bhzlk2SQyP7JWPlQxSZoUTw",
  });
  file = req.files.photo;
  console.log(file);
  cloudinary.uploader.upload(file.path, function (err, result) {
    console.log("Error: ", err);
    console.log("Result: ", result);
    console.log(result.url);
    console.log(result.original_filename);
    const slider = new Slider({
      Image_name: result.original_filename,
      Image_url: result.url,
      Image_caption: req.body.Image_caption,
    });
    slider
      .save()
      .then((data) => {})
      .catch((err) => {
        return resp.status(500).send({
          message: err.message || "error occured while, registering new user",
        });
      });
    console.log("Sucess");
    return resp.status(200).send({
      status_code: 200,
      mediaName: result.original_filename,
      origMediaName: result.original_filename,
      mediaSource: result.url,
    });
  });
});

require("./app/routes/Demo.routes")(app);
require("./app/routes/Registration.routes")(app);
//require('./app/routes/sms.routes')(app);
require("./app/routes/email.route")(app);
require("./app/routes/contact.route")(app);
require("./app/routes/donor.route")(app);
require("./app/routes/Donorsignup.route")(app);
require("./app/routes/Beneficiaryregform.route")(app);
require("./app/routes/Donordetail.route")(app);
require("./app/routes/Itemmaster.route")(app);
require("./app/routes/resource-reg.routes")(app);
require("./app/routes/Benefis.route")(app);
require("./app/routes/Doctorregistration.route")(app);
require("./app/routes/MedicalCenterReg.route")(app);
require("./app/routes/DiagnosticCenterReg.routes")(app);
require("./app/routes/UserRegistration.route")(app);
require("./app/routes/BeneficiarySignup.route")(app);
require("./app/routes/Dealer.route")(app);
require("./app/routes/Admin.route")(app);
require("./app/routes/DealerSignin.route")(app);
require("./app/routes/State.route")(app);
require("./app/routes/postalCode.route")(app);
//   require('./app/routes/visitor.route')(app);
require("./app/routes/pikingDetails.route")(app);
require("./app/routes/UserType.route")(app);
require("./app/routes/Multipleuser.route")(app);
require("./app/routes/ContentVision.route")(app);

///grievance app
require("./app/routes/grievanceRegistration.route")(app);
require("./app/routes/grivenceComplaintList.route")(app);
require("./app/routes/grievancedesealing.route")(app);
require("./app/routes/grievanceEncroachmentOnpublic.route")(app);
require("./app/routes/grievanceEncroachment.route")(app);
require("./app/routes/grievanceBuildingByelaws.route")(app);
require("./app/routes/grievanceOngoingunauthorized.route")(app);
require("./app/routes/grievanceRightwayrelated.route")(app);
require("./app/routes/GrievanceRoadrelated.route")(app);
require("./app/routes/grievanceMisc.route")(app);
require("./app/routes/grievanceApply.route")(app);
require("./app/routes/grievanceAuthorityRegisteraton.route")(app);
require("./app/routes/grievanceworkonprogressIAtome.route")(app);
require("./app/routes/grievancenoteviewresloved.route")(app);
require("./app/routes/grievancesendcomment.route")(app);
require("./app/routes/grievanceworkonprogressotherthenstf.route")(app);
require("./app/routes/grievanceapplyotherthenSTF.route")(app);
require("./app/routes/GrievanceNodalofficer.route")(app);

// listen for requests
//  app.listen(5107, ()=> {
//     console.log("Server is listening on port 4107");
// });

app.listen(process.env.PORT || dbConfig.httpPort, () => {
  console.log("Server is listening on port 5107");
});
