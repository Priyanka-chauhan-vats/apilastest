module.exports = app => {
    const onpublic = require('../controllers/grievanceOngoingunauthorized.controller');

    app.post('/GrievanceOngoingunauthorizedForm', onpublic.create);

    
    
}