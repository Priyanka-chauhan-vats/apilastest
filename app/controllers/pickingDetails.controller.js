const ItemMasterInfo = require('../models/Itemmaster.model');
const dealer = require('../models/Dealer.model');
const ResourceReg = require('../models/resource-reg.model');
const DonorDetaInfo = require('../models/Donordetail.model');
const IpModal = require('../models/ip.model');

// get all item from pin code
exports.findAllitem = (req, res) => {
    // logger.trace("get all the speciality");
// find dealer pin code
console.log(req.body);
//5e2d9feaf37d2b2744f3069b
dealer.find({ _id:req.body.user_id},{ pincode: 8})
         .then(dealer_pin => {
console.log(dealer_pin[0].pincode);
            // res.send(dealer_pin[0].pincode);
//////// /////////////////////////////
ResourceReg.find({ pincode:dealer_pin[0].pincode},{ _id:1})
         .then(resource => {
console.log(resource[0]._id);
             //res.send(resource);
////////////////////////////////////
DonorDetaInfo.find({ user_id: resource[0]._id})
         .then(my_order => {
if (my_order.length == 0) {
                console.log("We Can Proceed with Registration");
return res.status(400).send({
                    statusCode: 400,
                    message: 'NO Data found'
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
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });

////////////////////////////////////


         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
        });
//////// /////////////////////////////


         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
        });

/*
// find doner id using pin
ResourceReg.find({ pincode:dealer_pin[0].pincode},{})
         .then(resource => {
console.log(resource);
            // res.send(dealer_pin[0].pincode);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
        });



     ItemMasterInfo.find({ _id:'5de6853893a39e00c06c8b50'},{ _id: 0 })
         .then(allitem => {
// console.log('dsad');
             res.send(allitem);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });
*/

 }
 exports.save_ip = (req, res) => {
console.log("save ip");
var os = require('os');
var ifaces = os.networkInterfaces();
Object.keys(ifaces).forEach(function (ifname) {
 var alias = 0;

 ifaces[ifname].forEach(function (iface) {
if ('IPv4' !== iface.family || iface.internal !== false) {
 // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
 return;
}

if (alias >= 1) {
 // this single interface has multiple ipv4 addresses
 console.log(ifname + ':' + alias, iface.address);
} else {
 // this interface has only one ipv4 adress
 console.log(ifname, iface.address);
 
 IpModal.find({system_ip:iface.address})
         .then(allitem => {
//console.log(allitem.length);
            // res.send(allitem);
if(allitem.length == 0) {
const ip = new IpModal({
            system_ip: iface.address,
            system_network: ifname
           
});
ip.save()
.then(data => {
  console.log('IP save sucess');
}).catch(err => {
console.log('Error' +err);
});
}
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });
 
 
 
 
}
++alias;
 });
});

 }
 exports.all_visitor = (req, res) => {
console.log("get all visitor");

IpModal.find({})
         .then(allitem => {
console.log(allitem);
             res.send(allitem);
         })
         .catch(err => {
             res.status(500).send({
                 message: err.message || "can't fetch speciality"
             });
         });

 }