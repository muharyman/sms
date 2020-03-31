var conn = require('../databases/connection');
var excecute = require('../databases/execute_query');

returnedColumns = ['id','nama','lat','lon','deskripsi','foto','created_at','updated_at']; 

exports.checkExist = function (column, value, callback){
    var filter = conn.escapeId(column) + '=' + conn.escape(value);
    var q = 'select exists (select * from sensors where '+ filter+')';
    excecute(conn, q, callback);
};

exports.list = function (callback){
    var q = 'select '+ returnedColumns.join() +' from sensors';
    excecute(conn, q, callback);
}

exports.show = function (id, callback){
    var q = 'select '+ returnedColumns.join() +' from sensors where id =' + conn.escape(id);
    excecute(conn, q, callback);
}

exports.findby = function (column, value, op, callback){
    var filter = conn.escapeId(column) + op + conn.escape(value);
    var q = 'select * from sensors  where '+filter;
    excecute(conn, q, callback);
}

exports.update = function (id, data, callback){
    var dataQuery = [];
    for (key in data){
        dataQuery.push(conn.escapeId(key)+'='+conn.escape(data[key]));
    }
    dataQuery.push('updated_at=CURRENT_TIMESTAMP');
    dataQuery = dataQuery.join();
    var q = 'update sensors set '+dataQuery+' where id =' + conn.escape(id);
    excecute(conn, q, callback);
}

exports.create = function (data, callback){
    var keys = [];
    var values = [];
    for (key in data){
        keys.push(conn.escapeId(key));
        values.push(conn.escape(data[key]));
    }
    keys = keys.join();
    values = values.join();
    var q = 'insert into sensors ('+keys+') values ('+values+')';
    excecute(conn, q, callback);
}

exports.delete = function (id, callback){
    var q = 'delete from sensors where id =' + conn.escape(id);
    excecute(conn, q, callback);
}