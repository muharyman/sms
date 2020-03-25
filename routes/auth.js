var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');

/* AUTH ROUTER */
router.post('/signin', authController.signin);
router.post('/register', authController.register);

module.exports = router;
