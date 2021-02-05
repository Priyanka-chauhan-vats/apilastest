module.exports = app => {
    const masterState = require('../controllers/grievancecomplaintlist.controller');
   

  
    app.get('/findAllComplaintList', masterState.findAllstate);
   
}
