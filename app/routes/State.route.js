module.exports = app => {
    const masterState = require('../controllers/State.controller');
    const yearroutew = require('../controllers/year.controller')

    app.post('/State', masterState.create);
    app.get('/findAllstate', masterState.findAllstate);
    app.post('/paasingyear' ,yearroutew.create);
    app.get('/findAllyear', yearroutew.findAllyear);
}
