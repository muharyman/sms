var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/images/sensors');
    },
    filename: function(req, file, callback) {
        var parsedName = path.parse(file.originalname);
        callback(null, parsedName.name + '-' + Date.now() + parsedName.ext);
    }
});
var accExt = [".jpeg", ".png", ".jpg", ".gif", ".svg"];
var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if (accExt.includes(path.parse(file.originalname).ext)){
            callback(null, true);
        } else {
            callback(new Error("file type not supported"), false);
        }
    }
});

module.exports = upload;

