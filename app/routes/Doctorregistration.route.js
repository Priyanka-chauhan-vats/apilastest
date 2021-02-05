module.exports = app => {
    const DoctiNFO = require('../controllers/Doctorregistration.controller');

    app.post('/DocII', DoctiNFO.create);
    
}