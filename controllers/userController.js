var response = require('./response');
var users = require('../models/users');
var bcrypt = require('bcrypt');

exports.create = function(req,res,next){
    users.checkExist('username', req.body.username, async function(err, results){
        if (err){
            response.error(res, err);
        } else {
            if (!results[0]){
                req.body.password = await bcrypt.hash(req.body.password, 10);
                users.create(req.body, function(err, data){
                    if (err){
                        response.error(res, err);
                    }else {
                        response.success(res, data);
                    }
                });
            } else {
                response.error(res, "username already exists");
            }
        }
    })
};

exports.update = function(req,res,next){
    users.findby('username', req.body.username, '=', async function(err, results){
        if (err){
            response.error(res, err);
        } else {
            var user = results[0];
            if (!user || req.params.id == user.id){
                if (req.body.password){
                    req.body.password = await bcrypt.hash(req.body.password, 10);
                }
                users.update(req.params.id,req.body,function(err, data){
                    if (err){
                        response.error(res, err);
                    }else{
                        response.success(res, data);
                    }
                });
            } else{
                response.error(res, 'username already taken');
            }
        }
    });
};

exports.show = function(req,res,next){
    var data = users.show(req.params.id,function(err, data){
        if (err){
            response.err(res, err);
        }else{
            response.success(res, data);
        }
    });
};

exports.list = function(req,res,next){
    var data = users.list(function(err, data){
        if (err){
            response.error(res, err);
        } else {
            response.success(res, data);
        }
    });
};

exports.delete = function(req,res,next){
    var data = users.delete(req.params.id,function(err, data){
        if (err){
            response.error(res, err);
        } else {
            response.success(res, data);
        }
    });
};