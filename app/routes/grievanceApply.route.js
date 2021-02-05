module.exports = app => {
    const complaint = require('../controllers/grievanceapply.controller');

    app.post('/grievanceApplyform', complaint.create);
    app.get("/all_grivencelist", complaint.all_grivencelist)
    app.post("/grievancedetails", complaint.grievancenotviewdetails);

    app.post("/grievanceViewcompalint", complaint.create2);
    app.post("/grievanceviewdetails", complaint.grievanceviewdetails)
    app.get("/all_grivencelistviewcomaplaint", complaint.all_grivencelistviewcomaplaint)

    
}