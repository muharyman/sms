var express = require('express');
var router = express.Router();
var sensorController = require('../controllers/sensorController');
var uploadMiddleware = require("../middleware/storeSensorsPhoto");

/* sensors router */
router.get('/list', sensorController.list);
router.get('/show/:id', sensorController.show);
router.post('/create', uploadMiddleware.single('foto'), sensorController.create);
router.post('/update/:id', uploadMiddleware.single('foto'), sensorController.update);
router.delete('/delete/:id', sensorController.delete);

module.exports = router;
