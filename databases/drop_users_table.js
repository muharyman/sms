var con = require('./connection');

module.exports = function() {
    var q = "DROP TABLE IF EXISTS users";
    con.query(q, function (err, result) {
        if (err) throw err;
        console.log("user table dropped");
    });
}
