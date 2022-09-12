const dbcon = require("../../config/mysql_db_config");



const add = (withdraw_request, callBack) => {
    const{user_id,user_type,account_no,ammount}=withdraw_request;
    dbcon.query('INSERT INTO withdraw_request(user_id,user_type,account_no,ammount) VALUES (?,?,?,?)', [user_id,user_type,account_no,ammount], (err, result, fields) => {
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

const update = (withdraw_request, callBack) => {
const{user_id,user_type,account_no,ammount,request_time,status,id}=withdraw_request;
    dbcon.query('UPDATE withdraw_request SET user_id=?,user_type=?,account_no=?,ammount=?,request_time=?,status=? WHERE id=?', [user_id,user_type,account_no,ammount,request_time,status,id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (id, callBack) => {
    dbcon.query('SELECT * FROM withdraw_request WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM withdraw_request', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM withdraw_request WHERE id', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
