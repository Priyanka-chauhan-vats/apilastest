module.exports = app => {
    const contactInfoas = require('../controllers/GrievanceRightwayrelated.controller');

    app.post('/grievanceRightwayRelatedform', contactInfoas.create);

    
    
}