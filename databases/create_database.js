var mysql = require('mysql');
var config = require('config');
var database_config = config.get("database");

module.exports = function (){

  var con = mysql.createConnection({
    host: database_config.host,
    user: database_config.user,
    password: database_config.password
  });
  
  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var q = "CREATE DATABASE IF NOT EXISTS " + database_config.database;
      con.query(q, function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
    });
}