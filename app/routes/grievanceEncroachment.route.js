module.exports = app => {
    const onpublic = require('../controllers/grievanceEncroachement.controller');

    app.post('/grievanceEncroachment', onpublic.create);

    
    
}