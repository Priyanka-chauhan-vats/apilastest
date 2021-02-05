module.exports = app => {
    const complaint = require('../controllers/grievancesendcomment.controller');

    app.post('/grievancesendcomment', complaint.create);
    // app.get("/all_grivencelist", complaint.all_grivencelist)
  

    

    
}