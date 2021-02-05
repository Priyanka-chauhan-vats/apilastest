module.exports = app => {
    const complaint = require('../controllers/grievanceworkonprogressIAtome.controller');

    app.post('/grievanceworkonProgress', complaint.create);
    app.get("/all_workinprogress", complaint.all_workinprogress)
    app.post("/grievanceworkonprogressdetails", complaint.grievanceworkonprogressdetails);
    // app.get("/all_grivencelist", complaint.all_grivencelist)
  

    

    
}