module.exports = app => {
    const itMaiNFO = require('../controllers/Itemmaster.controller');

    app.post('/ItemmasterII', itMaiNFO.create);
    app.get('/findAllitem', itMaiNFO.findAllitem);
    
}