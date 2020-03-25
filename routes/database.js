var express = require('express');
var router = express.Router();
var databaseController = require('../controllers/databaseController');

/* DATABASE ROUTER */
router.get('/create/database', databaseController.createDB);
router.get('/create/users', databaseController.createUsersTable);
router.get('/drop/database', databaseController.dropDB);
router.get('/drop/users', databaseController.dropUsersTable);

module.exports = router;
