module.exports = app => {
    const contactInfoas = require('../controllers/grievancedesealing.controller');

    app.post('/grievancedesealingform', contactInfoas.create);

    
    
}