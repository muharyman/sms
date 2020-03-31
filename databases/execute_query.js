module.exports = function(conn, q, callback) {
    conn.query(q, function (err, results, fields) {
        return callback(err, results);
    })
}