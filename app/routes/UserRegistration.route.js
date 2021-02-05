module.exports = app => {
    const DoctiNFO = require('../controllers/UserRegistration.controller');

    app.post('/UserRegistrationII', DoctiNFO.create);
    
}