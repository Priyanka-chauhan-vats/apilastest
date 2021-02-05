module.exports = app => {
    const apitest = require('../controllers/Demo.controller');

    app.post('/ApiTest', apitest.create);
    app.post('/ApiTestUpdate', apitest.updateApi)

    
}