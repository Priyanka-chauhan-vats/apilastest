module.exports = app => {
    const DoctiNFO = require('../controllers/DiagnosticCenterReg.controller');

    app.post('/DiagnosticCenII', DoctiNFO.create);
    
}