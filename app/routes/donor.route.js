module.exports = app => {
    const DonoriNFO = require('../controllers/donor.controller');

    app.post('/donorall', DonoriNFO.create);
    
}