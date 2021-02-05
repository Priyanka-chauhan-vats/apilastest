module.exports=app=>{
    const visionContent1=require('../controllers/ContentVision.controller');
    // const praneecontent1=require('../controllers')

    app.post('/content_change1', visionContent1.content_change1);
    app.post('/get_homecontent1', visionContent1.get_homecontent1);
    app.post('/content_change2',visionContent1.content_change2);
    app.post('/get_homecontent2',visionContent1.get_homecontent2);
    app.post('/content_change3',visionContent1.content_change3);
    app.post('/get_homecontent3',visionContent1.get_homecontent3);
    app.post('/content_change4',visionContent1.content_change4);
    app.post('/get_homecontent4',visionContent1.get_homecontent4);
    app.post('/content_change5',visionContent1.content_change5);
    app.post('/get_homecontent5',visionContent1.get_homecontent5);

    app.post('/content_change6',visionContent1.content_change6);
    app.post('/get_homecontent6',visionContent1.get_homecontent6);
    app.post('/content_change7',visionContent1.content_change7);
    app.post('/get_homecontent7',visionContent1.get_homecontent7);

    app.post('/updateFaq',visionContent1.content_change8);
    app.post('/getFaq',visionContent1.get_homecontent8);

    app.post('/updatersnb',visionContent1.content_change9);
    app.post('/getrsnb',visionContent1.get_homecontent9);
app.post('/savehostbene', visionContent1.content_change10);
app.post('/gethostbene', visionContent1.get_homecontent10);



    app.post('/saveMedia',visionContent1.saveMedia);
   app.post('/get_gallary',visionContent1.get_gallary);
   app.post('/delete_gallary',visionContent1.delete1);
}