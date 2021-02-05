module.exports = (app) => {
    const usertype1 = require("../controllers/UserType.controller");
    app.post('/add_usertype', usertype1.add_usertype);
    app.get('/findAllstate1', usertype1.findAllusertype);
    // app.get('/findAllusertype1', usertype.findAllusertype);
}
