var Nexmo = require('nexmo');
var config = require('config');
var response = require('../controllers/response');
 
nexmoConfig = config.get("nexmo");
var nexmo = new Nexmo({
  apiKey: nexmoConfig.key,
  apiSecret: nexmoConfig.secret
});

exports.send = function (req, res, next){
    nexmo.message.sendSms("Nexmo", req.body.number, req.body.text, function(err, responseData){
        if (err){
            response.error(res, err);
        } else {
            if (responseData.messages[0]['status'] === "0"){
                response.success(res, "message sent success");
            } else {
                response.error(res, responseData.messages[0]['error-text']);
            }
        }
    });
};