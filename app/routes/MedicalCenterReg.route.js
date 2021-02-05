module.exports = app => {
    const DoctiNFO = require('../controllers/MedicalCenterReg.controller');

    app.post('/MedRecII', DoctiNFO.create);
    
}