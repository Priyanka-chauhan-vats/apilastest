module.exports = (app) => {
    const sms = require('../controllers/sms.controller')
    app.post('/sendsms',sms.send);
}