const ContactInfo = require('../models/contact.modal') 
const NewsInfo = require('../models/news.model') 

exports.create = (req, res) => {
    console.log("ContactInfo controller is hitted"); 
    console.log(req.body);

    const contactInfo = new ContactInfo({
        Name: req.body.Name,
        Email: req.body.Email,
        Subject: req.body.Subject,
        Message:req.body.Message
    });

    contactInfo.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding new service"
            });
        });
}




////////Funding
exports.content_changenews = (req, res) => {
    console.log("funding Content update controller hite!!");
    console.log(req.body.news_content);
//nahi save aur update ka table dikhao
    NewsInfo.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                constnews = new NewsInfo({
                    cnews: req.body.news_content
                });

                constnews.save()
                    .then(data => {
                        console.log(content);
                        res.send({
                            statusCode: 200,
                            message: "Data Found",
                            data: data
                        })

                    })
                    .catch(err => {
                        logger.log(err)
                        res.send(err)
                    })

            }
            else {
                NewsInfo.findOneAndUpdate({ cnews: req.body.news_content })
                    .then(data => {
                        res.send({
                            statusCode: 200,
                            message: "Data Found",
                            data: data
                        })


                    })
                    .catch(err => {
                        logger.log(err)
                        res.send(err)
                    })

            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "can't fetch speciality"
            });
        });


}


exports.get_news = (req, res) => {
    console.log("get_ funding");
    NewsInfo.find({}, { cnews: 1 })
        .then(content => {
            if (content.length == 0) {
                console.log("We Can Proceed with content");
                return res.status(400).send({
                    statusCode: 400,
                    message: 'NO Data found'
                })

            }
            else {
                return res.status(200).send({
                    statusCode: 200,
                    message: 'Data Found',
                    data: content
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "can't fetch speciality"
            });
        });


}