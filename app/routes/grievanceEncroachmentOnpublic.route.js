module.exports = app => {
    const onpublic = require('../controllers/grievanceEncroachmentOnpublic.controller');

    app.post('/GrievanceEncroachmentonpublicForm', onpublic.create);

    
    
}