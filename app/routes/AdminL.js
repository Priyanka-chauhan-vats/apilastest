
module.exports = app => {
    const admIn = require('../controllers/AdminLoginC');
    app.post('/adminIn', admIn.create);
    
}