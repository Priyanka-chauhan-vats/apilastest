module.exports = (app) => {
    const pickingDetails = require("../controllers/pickingDetails.controller");

    app.post("/pickingDetails", pickingDetails.findAllitem)
    app.get("/save_ip", pickingDetails.save_ip)
    app.get("/all_visitor", pickingDetails.all_visitor)
}