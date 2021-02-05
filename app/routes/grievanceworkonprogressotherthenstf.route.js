module.exports = app => {
    const complaint = require('../controllers/grievanceworkonprogressIAtomeothenthenstf.controller');

    app.post('/grievanceworkonProgressotherthenstf', complaint.createothenthenstf);
    app.get("/all_workinprogressotehrthenstf", complaint.all_workinprogressotherthenstf)
    app.post("/grievanceworkonprogressdetailsotherthenstf", complaint.grievanceworkonprogressdetailsothenthenstf);
    // app.get("/all_grivencelist", complaint.all_grivencelist)
  

    

    
}