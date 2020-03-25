var response = require('../controllers/response');
var jwt = require('jsonwebtoken');
var config = require('config');

module.exports = function (req, res, next){
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];
    if (token == null) return response.unauthorized(res);

    jwt.verify(token, config.get('jwtsecret'), function(err, decoded){
        if (err) return response.error(res, "error occured");
        console.log(decoded);
        next();
    })
}