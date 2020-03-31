var con = require('./connection');

module.exports = function() {
    q = "DROP TABLE IF EXISTS sensors";
    con.query(q, function (err, result) {
        if (err) throw err;
        console.log("sensors table dropped");
    });
}
