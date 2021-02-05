module.exports = app => {
    const contactInfoas = require('../controllers/GrievanceRoadrelated.controller');

    app.post('/grievanceRoadRelatedform', contactInfoas.create);

    
    
}