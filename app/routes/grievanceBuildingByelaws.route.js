module.exports = app => {
    const onpublic = require('../controllers/grievanceBuildingbyelaws.controller');

    app.post('/GrievanceBuildingbyelawsForm', onpublic.create);

    
    
}