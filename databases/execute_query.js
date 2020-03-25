module.exports = function(conn, q, callback) {
    conn.query(q, function (err, results, fields) {
        if (err) throw err;
        results;
        return callback(results);
    })
}