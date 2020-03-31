var response = require('./response');
var createDatabase = require("../databases/create_database");
var createUsers = require("../databases/create_users_table"); 
var createSensors = require("../databases/create_sensors_table");
var dropUsers = require("../databases/drop_users_table");
var dropDatabase = require("../databases/drop_database");
var dropSensors = require("../databases/drop_sensors_table");

exports.createDB = function(req,res,next){
    try {
        createDatabase();
        response.success(res, "Database Created");
    } catch (error) {
        response.error(res, "Error Occured");
    }
};

exports.createUsersTable = function(req,res,next){
    try {
        createUsers();
        response.success(res, "Users Table Created");
    } catch (error) {
        response.error(res, "Error Occured");
    }
};

exports.createSensorsTable = function (req,res,next){
    try {
        createSensors();
        response.success(res, "Sensors Table Created");
    } catch (error) {
        response.error(res, "Error Occured");
    }
}  

exports.dropDB = function(req,res,next){
    try {
        dropDatabase();
        response.success(res, "Database Dropped");
    } catch (error) {
        response.error(res, "Error Occured");
    }
};

exports.dropUsersTable = function(req,res,next){
    try {
        dropUsers();
        response.success(res, "Users Table Dropped");
    } catch (error) {
        response.error(res, "Error Occured");
    }
};

exports.dropSensorsTable = function (req,res,next){
    try {
        dropSensors();
        response.success(res, "Sensors Table Dropped");
    } catch (error) {
        response.error(res, "Error Occured");
    }
}