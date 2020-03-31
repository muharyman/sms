var response = require('./response');
var sensors = require('../models/sensors');
var fs = require('fs');
var path = require('path');

exports.create = function(req,res,next){
    if (req.file) req.body.foto = req.file.filename;
    sensors.create(req.body, function(err, data){
        if (err){
            response.error(res, err);
        }else {
            response.success(res, data);
        }
    });
};

exports.update = function(req,res,next){
    sensors.findby("id", req.params.id, "=", function(err, results){
        if (err){
            response.error(res, err);
        } else {
            var sensor = results[0];
            if (sensor){
                if (req.file) req.body.foto = req.file.filename;
                if (sensor.foto){
                    fs.unlink("public/images/sensors/" + sensor.foto, function (err){
                        if (err){
                            response.error(res, err);
                        } else {
                            sensors.update(req.params.id,req.body,function(err, data){
                                if (err){
                                    response.error(res, err);
                                }else{
                                    response.success(res, data);
                                }
                            });
                        }
                    });
                } else {
                    sensors.update(req.params.id,req.body,function(err, data){
                        if (err){
                            response.error(res, err);
                        }else{
                            response.success(res, data);
                        }
                    });
                }
            } else {
                response.error(res, "sensor not found");
            }
        }
    });
};

exports.show = function(req,res,next){
    var data = sensors.show(req.params.id,function(err, data){
        if (err){
            response.err(res, err);
        }else{
            response.success(res, data);
        }
    });
};

exports.list = function(req,res,next){
    var data = sensors.list(function(err, data){
        if (err){
            response.error(res, err);
        } else {
            response.success(res, data);
        }
    });
};

exports.delete = function(req,res,next){
    sensors.findby("id", req.params.id, "=", function(err, results){
        if (err){
            response.error(res, err);
        } else {
            var sensor = results[0];
            if (sensor){
                if (sensor.foto){
                    fs.unlink("public/images/sensors/" + sensor.foto, function (err){
                        if (err){
                            response.error(res, err);
                        } else {
                            sensors.delete(req.params.id,function(err, data){
                                if (err){
                                    response.error(res, err);
                                } else {
                                    response.success(res, data);
                                }
                            });       
                        }
                    });
                } else {
                    sensors.delete(req.params.id,function(err, data){
                        if (err){
                            response.error(res, err);
                        } else {
                            response.success(res, data);
                        }
                    });
                }
            }else{
                response.error(res, "sensor not found");
            }
        }
    });
};

exports.getFoto = function(req, res, next){
    var options = {
        root: path.join(rootDir, 'public/images/sensors'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
    
    var fileName = req.params.foto
    res.sendFile(fileName, options);
};