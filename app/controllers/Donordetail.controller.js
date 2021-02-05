const DonorDetaInfo = require('../models/Donordetail.model')

exports.create = (req, res) => {
    console.log("DonorDetaInfo controller is hitted");
    console.log(req.body);
	let it = req.body.item;
    let qt = req.body.quantity;
    let unit=req.body.unit;
    console.log(it.length);
    console.log(it[0]);
for(i=0;i<it.length;i++) {
    const donoInfo = new DonorDetaInfo({
        Itemname: it[i],
        Quantity: qt[i],
        Unit:unit[i],
       // Unit:req.body.unit,
        Location: req.body.location,
        Availabledate:req.body.date,                
        user_id:req.body.user_id
     
    });

    donoInfo.save()
        .then(data => {

            res.status(200).send(data);
console.log(data);
        }).catch(err => {
console.log(err.message);
            res.status(500).send({

                message: err.message || "Some error occured while adding new service"
            });
        });
}
}
exports.myorder = (req, res) => {
    console.log("DonorDetaInfo controller is hitted -- myorder"); 
    console.log(req.body.user_id);

   DonorDetaInfo.find({ user_id: req.body.user_id })
        .then(my_order => {
            console.log("Resgistered user array");
            console.log(my_order);
            if (my_order.length == 0) {
                console.log("We Can Proceed with Registration");
				return res.status(400).send({
                    statusCode: 400,
                    message: 'NO Data founf'
                })
                
            }
            else {
                return res.status(200).send({
                    statusCode: 200,
                    message: 'Data Found',
					data:my_order
                })
            }
        })
		
		
    
}
