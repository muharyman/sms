var response = require('./response');
var users = require('../models/users');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('config');

exports.signin = function(req,res,next){
    users.findby('username', req.body.username,'=', function (results){
        var user = results[0];
        if (user){
            bcrypt.compare(req.body.password, user.password, function(err, result){
                if (result){
                    var privateKey = config.has("jwtsecret") ? config.get("jwtsecret") : "secret";
                    var data = {
                        id: user.id,
                        jabatan: user.jabatan
                    };
                    jwt.sign(data, privateKey, { expiresIn: '1d' }, function(err, token) {
                        delete user.password;
                        user['token'] = token;
                        response.success(res, user);
                    });
                } else {
                    response.error(res, "password does not match");
                }
            });
        }else {
            response.error(res, "user not found");
        }
    });
}

exports.register = async function(req, res, next){
    users.checkExist('username', req.body.username, async function(results){
        if (!results[0]){
            req.body.password = await bcrypt.hash(req.body.password, 10);
            users.create(req.body, function(data){
                response.success(res, data);
            });
        } else {
            response.error(res, "username already exists");
        }
    })
}