module.exports = app => {
    const DonordetiNFO = require('../controllers/Donordetail.controller');

    app.post('/donor_order', DonordetiNFO.create);
	app.post('/myorder', DonordetiNFO.myorder);
   
}
