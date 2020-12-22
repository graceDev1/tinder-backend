const router = require('express').Router();
const controller = require('../controllers/personController');



router.post('/',controller.addPerson);

router.get('/', controller.fetchPerson);


module.exports =  router;
