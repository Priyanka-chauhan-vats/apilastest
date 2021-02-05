module.exports = (app) => {
    const postalCode = require("../controllers/postalCode.controller");

    app.post("/postalcode", postalCode.get)
}