const axios = require('axios');
const logger = require('tracer').console();


exports.get = (req,res) => {
    console.log(req.body.postalCode);
    let postalCode = req.body.postalCode;
    axios.get("http://www.postalpincode.in/api/pincode/"+postalCode)
    .then((response)=> {
        console.log(response.data);
        res.send(response.data);
    })
    .catch((err) => {
        console.log(err);
        res.status(200).send({
            message: err
        })
    })
}