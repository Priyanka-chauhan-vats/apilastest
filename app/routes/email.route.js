

module.exports = (app) => {
    const mail =  require('../controllers/email.controller');
    app.post('/send_mail',mail.send_mail);
}
