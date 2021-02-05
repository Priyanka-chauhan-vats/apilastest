module.exports = app => {
    const contactInfoas = require('../controllers/grievanceMisc.controller');

    app.post('/grievanceMiscform', contactInfoas.create);

    
    
}