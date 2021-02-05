module.exports = app => {
    const ContactiNFO = require('../controllers/contact.controller');

    app.post('/ContactII', ContactiNFO.create);

    app.post('/updatenew',ContactiNFO.content_changenews);
    app.post('/getnews',ContactiNFO.get_news);
    
}