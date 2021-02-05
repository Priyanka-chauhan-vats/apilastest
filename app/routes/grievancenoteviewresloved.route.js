module.exports = app => {
    const complaint = require('../controllers/grievancenotviewresloved.controller');

    app.post('/grievancenotviewresloved', complaint.create);
    // app.get("/all_grivencelist", complaint.all_grivencelist)
  

    

    
}