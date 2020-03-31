var con = require('./connection');

module.exports = function (){
    var q = `CREATE TABLE IF NOT EXISTS sensors (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nama VARCHAR(100),
      lat DECIMAL(10,8),
      lon DECIMAL(11,8),
      deskripsi TEXT,
      foto VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )  ENGINE=INNODB`;
    con.query(q, function (err, result) {
      if (err) throw err;
      console.log("sensors table created");
    });
}
