var con = require('./connection');

module.exports = function (){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    q = `CREATE TABLE IF NOT EXISTS users (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
      jabatan INT UNSIGNED NOT NULL,
      username VARCHAR(60) NOT NULL,
      password VARCHAR(60) NOT NULL,
      fullname VARCHAR(100),
      no_telp VARCHAR(20),
      status BOOLEAN DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )  ENGINE=INNODB`;
    con.query(q, function (err, result) {
      if (err) throw err;
      console.log("Users table created");
    });
  });
}
