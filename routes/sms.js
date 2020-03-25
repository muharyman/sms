var express = require('express');
var router = express.Router();
var smsController = require('../controllers/smsController');

/* SMS ROUTER */
router.post('/send', smsController.send);

module.exports = router;
