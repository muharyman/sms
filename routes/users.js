var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* users router */
router.get('/list', userController.list);
router.get('/show/:id', userController.show);
router.post('/create', userController.create);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;
