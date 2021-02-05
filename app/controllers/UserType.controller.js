const Usertype = require('../models/UserType.model');

exports.add_usertype = (req, res) => {
    console.log("User Type Controller is hitted");
    console.log(req.body);
    
	const Type = new Usertype({
		title: req.body.title
	});

	Type.save()
		.then(data => {
			let message = {
				responseCode: 200,
				message: 'we can proceed further'
			}
			
			let response = Object.assign(data, message)
			res.send(response);
		}).catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occured while registring new user'
			});
	});
    
}

exports.findAllusertype = (req, res) => {
    // logger.trace("get all the speciality");
    Usertype.find({},{ _id: 1, title : 1  })
         .then(allitem => {
             res.send(allitem);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });
 }