var express = require('express');
var router = express.Router();
var databaseController = require('../controllers/databaseController');

/* DATABASE ROUTER */
router.get('/create/database', databaseController.createDB);
router.get('/create/users', databaseController.createUsersTable);
router.get('/create/sensors', databaseController.createSensorsTable);
router.get('/drop/database', databaseController.dropDB);
router.get('/drop/users', databaseController.dropUsersTable);
router.get('/drop/sensors', databaseController.dropSensorsTable);

module.exports = router;
