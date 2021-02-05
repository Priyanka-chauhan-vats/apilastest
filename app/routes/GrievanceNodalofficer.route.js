module.exports = (app) => {
    const complaint = require("../controllers/GrievanceNodalofficer.controller");
  
    app.post("/grievanceNodalform", complaint.create);
    app.post("/grievanceverifyauthorityNodalofficer", complaint.verifyAuthority);

    app.get("/all_Nodalofficer", complaint.all_nodalofficerlist);
   
  };
  