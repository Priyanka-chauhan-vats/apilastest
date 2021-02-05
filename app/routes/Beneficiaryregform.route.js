module.exports = app => {
    const BeneriNFO = require('../controllers/Beneficiaryregform.controller');

    app.post('/BenerII', BeneriNFO.create);
    
}