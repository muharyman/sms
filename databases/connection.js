var mysql = require('mysql');
var config = require('config');
var database_config = config.get("database");

var con = mysql.createConnection({
    host: database_config.host,
    user: database_config.user,
    password: database_config.password,
    database: database_config.database
});

module.exports = con;