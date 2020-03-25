exports.success = function(res, data){
    var responseValue = {
        "status" : 200,
        "data" : data
    }
    res.json(responseValue);
    res.end();
};

exports.error = function(res, data){
    var responseValue = {
        "status" : 400,
        "data" : data
    }
    res.json(responseValue);
    res.end();
};

exports.requestError = function(res, msg = "Request Error"){
    var responseValue = {
        "status" : 417,
        "data" : msg
    }
    res.json(responseValue);
    res.end();
};

exports.unauthorized = function(res, msg = "Unauthorized"){
    var responseValue = {
        "status" : 401,
        "data" : msg
    }
    res.json(responseValue);
    res.end();
};

exports.custom = function(res, statusCode){
    var responseValue = {
        "status" : statusCode,
        "data" : msg
    }
    res.json(responseValue);
    res.end();
};