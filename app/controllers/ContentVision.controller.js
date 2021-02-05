const Contentvision = require('../models/ContentVision');
const Pranee = require('../models/contentPranee.model');
const Ourteam = require('../models/ContentTeam.model');

const Gallary = require('../models/gallary.model');
const multer = require("multer");


////////Vision
exports.content_change1 = (req, res) => {
    console.log("Home Content update controller hite!!");
    console.log(req.body.vision_content);



    Contentvision.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentvision = new Contentvision({
                    vision: req.body.vision_content
                });

                contentvision.save()
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
                Contentvision.findOneAndUpdate({ vision: req.body.vision_content })
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

exports.get_homecontent1 = (req, res) => {
    console.log("get_visioncontent");
    Contentvision.find({})
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

/////////Pranee
exports.content_change2 = (req, res) => {
    console.log("Home Content update controller hite!!");
    console.log(req.body.pranee_content);

    Pranee.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentpranee = new Pranee({
                    pranee: req.body.pranee_content
                });

                contentpranee.save()
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
                Pranee.findOneAndUpdate({ pranee: req.body.pranee_content })
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


exports.get_homecontent2 = (req, res) => {
    console.log("get_praneecontent2");
    Pranee.find({})
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

//////////Team
exports.content_change3 = (req, res) => {
    console.log("Home Content update controller hite!!");
    console.log(req.body.team_content);

    Ourteam.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentteam = new Ourteam({
                    ourteam: req.body.team_content
                });

                contentteam.save()
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
                Ourteam.findOneAndUpdate({ ourteam: req.body.team_content })
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


exports.get_homecontent3 = (req, res) => {
    console.log("get_praneecontent2");
    Ourteam.find({})
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



/////Women Impowernment
exports.content_change4 = (req, res) => {
    console.log("Home Content update controller hite!!");
    console.log(req.body.women_content);

    Ourteam.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentwomen = new Ourteam({
                    women: req.body.women_content
                });

                contentwomen.save()
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
                Ourteam.findOneAndUpdate({ women: req.body.women_content })
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


exports.get_homecontent4 = (req, res) => {
    console.log("get_womencontent2");
    Ourteam.find({}, { women: 1 })
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


/////Environment
exports.content_change5 = (req, res) => {
    console.log("Environment Content update controller hite!!");
    console.log(req.body.environment_content);

    Ourteam.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentenvironment = new Ourteam({
                    environment: req.body.environment_content
                });

                contentenvironment.save()
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
                Ourteam.findOneAndUpdate({ environment: req.body.environment_content })
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


exports.get_homecontent5 = (req, res) => {
    console.log("get_environmentcontent2");
    Ourteam.find({}, { environment: 1 })
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

////////Counselling
exports.content_change6 = (req, res) => {
    console.log("Counselling Content update controller hite!!");
    console.log(req.body.counselling_content);

    Ourteam.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentcounselling = new Ourteam({
                    counselling: req.body.counselling_content
                });

                contentcounselling.save()
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
                Ourteam.findOneAndUpdate({ counselling: req.body.counselling_content })
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


exports.get_homecontent6 = (req, res) => {
    console.log("get_ counselling");
    Ourteam.find({}, { counselling: 1 })
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

////////Funding
exports.content_change7 = (req, res) => {
    console.log("funding Content update controller hite!!");
    console.log(req.body.funding_content);

    Ourteam.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentfunding = new Ourteam({
                    funding: req.body.funding_content
                });

                contentfunding.save()
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
                Ourteam.findOneAndUpdate({ funding: req.body.funding_content })
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


exports.get_homecontent7 = (req, res) => {
    console.log("get_ funding");
    Ourteam.find({}, { funding: 1 })
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


//////////Faq
exports.content_change8 = (req, res) => {
    console.log("faq Content update controller hite!!");
    console.log(req.body.faq_content);

    Ourteam.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentfaq = new Ourteam({
                    faq: req.body.faq_content
                });

                contentfaq.save()
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
                Ourteam.findOneAndUpdate({ faq: req.body.faq_content })
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


exports.get_homecontent8 = (req, res) => {
    console.log("get_ faq");
    Ourteam.find({}, { faq: 1 })
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



exports.content_change9 = (req, res) => {
    console.log("faq Content update controller hite!!");
    console.log(req.body.rsnb_content);

    Ourteam.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentrsnb = new Ourteam({
                    rsnb: req.body.rsnb_content
                });

                contentrsnb.save()
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
                Ourteam.findOneAndUpdate({ rsnb: req.body.rsnb_content })
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


exports.get_homecontent9 = (req, res) => {
    console.log("get_ rsnb");
    Ourteam.find({}, { rsnb: 1 })
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







exports.content_change10 = (req, res) => {
    console.log("Home Content update controller hite!!");
    console.log(req.body.hostbene_content);



    Contentvision.find({})
        .then(content => {
            console.log(content);
            if (content.length == 0) {
                const contentvision = new Contentvision({
                    hostbene: req.body.hostbene_content
                });

                contentvision.save()
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
                Contentvision.findOneAndUpdate({ hostbene: req.body.hostbene_content })
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

exports.get_homecontent10 = (req, res) => {
    console.log("get_visioncontent");
    Contentvision.find({},{hostbene: 1})
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














exports.saveMedia = (req, res) => {
    console.log("test");
    var path = require('path');
    const storage = multer.diskStorage({
        destination: 'public/uploads/',
        filename: (req, file, callback) => {
            callback(null, Date.now() + '-' + file.originalname);
        }
    });

    const upload = multer({ storage: storage }).any('file');

    upload(req, res, (err) => {
        if (err) {
            return res.status(400).send({
                message: helper.getErrorMessage(err)
            });
        }
        let results = req.files.map((file) => {
            const gallary = new Gallary({
                Image_name: file.filename,
                Image_url: 'http://' + req.headers.host + '/public/uploads/' + file.filename
            });
            gallary.save()
                .then(data => {

                }).catch(err => {
                    res.status(500).send({
                        message: err.message || 'error occured while, registering new user'
                    });
                });
            return {
                status_code: 200,
                mediaName: file.filename,
                origMediaName: file.originalname,
                mediaSource: 'http://' + req.headers.host + '/public/uploads/' + file.filename
            }

        });
        res.status(200).json(results);
    });
}
exports.get_gallary = (req, res) => {
    console.log("get_gallary");
    Gallary.find({})
        .then(content => {
            if (content.length == 0) {
                console.log("We Can Proceed with Gallaery");
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


exports.delete1 = (req, res) => {
    console.log(req.body);
        Gallary.deleteOne({ _id: req.body.id })
             .then(content => {
    if (content.length == 0) {
    console.log("We Can Proceed with Gallaery");
    return res.status(400).send({
    statusCode: 400,
    message: 'NO Data found'
    })
                   
            }
    else {
    return res.status(200).send({
    statusCode: 200,
    message: 'Data Found'
    
    })
    }
    })
    .catch(err => {
    res.status(500).send({
    message: err.message || "can't fetch speciality"
    });
    });
    
    
     }
