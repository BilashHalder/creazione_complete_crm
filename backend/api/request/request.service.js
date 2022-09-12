const { request } = require("express");
const dbcon = require("../../config/mysql_db_config");



const add = (request, callBack) => {
    const {request_type, customer_id, comments}=request;
    dbcon.query('INSERT INTO request(request_type, customer_id, comments) VALUES (?,?,?)', [request_type, customer_id, comments], (err, result, fields) => {
        if(err)
        return callBack(err);
        else{
            find(result.insertId,(err,res)=>{
                if(err)
                return callBack(err);
                else
                return callBack(null,res);
            })
        }
    });
}

const update = (request, callBack) => {
    const {request_type, customer_id, request_date, comments, status,request_id}=request;
    dbcon.query('UPDATE request SET request_type=?,customer_id=?,request_date=?,comments=?,status=? WHERE request_id=?', [request_type, customer_id, request_date, comments, status,request_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (request_id, callBack) => {
    dbcon.query('SELECT * FROM request WHERE request_id=?', [request_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM request', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const remove = (request_id, callBack) => {
    dbcon.query('DELETE FROM request WHERE request_id=?', [request_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
