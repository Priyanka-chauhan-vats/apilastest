module.exports = app => {
    const complaint = require('../controllers/grievanceapplyotherthenSTF.controller');

    app.post('/grievanceApplyotherthenSTF', complaint.create);
    app.get("/all_grivencelistotherthenstf", complaint.all_grivencelistotherthenstf)
    app.post("/grievancedetailsotherthenstf", complaint.grievanceviewdetailsotherthenstf);

    app.post("/grievancereopencompalintotherthenstf", complaint.create2);
    app.post("/grievanceViewedcompalintotherthenstf", complaint.applyviewgrievance);
    app.post("/grievanceVieweddetailscompalintotherthenstf", complaint.viewdetailsotherthenstf);
        app.get("/all_grivencereopenotherthenstf", complaint.all_grivencereopenotherthenstf)
        app.get("/all_grivencelistotherthenstfViewed"   , complaint.all_grivencelistotherthenstfViewed)

    
}