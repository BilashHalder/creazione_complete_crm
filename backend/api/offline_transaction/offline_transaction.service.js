const dbcon = require("../../config/mysql_db_config");



const add = (offline_transaction, callBack) => {
    const{customer_id, transaction_id, amount, file_url,status}=offline_transaction;
    dbcon.query('INSERT INTO offline_transaction(customer_id, transaction_id, amount, file_url,status) VALUES (?,?,?,?,?)', [customer_id, transaction_id, amount, file_url,status], (err, result, fields) => {
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

const update = (offline_transaction, callBack) => {
    const{customer_id, transaction_id, amount, file_url,status,id}=offline_transaction;
    dbcon.query('UPDATE offline_transaction SET customer_id=?,transaction_id=?,amount=?,file_url=?,status=? WHERE id =?', [customer_id, transaction_id, amount, file_url,status,id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (transaction_id, callBack) => {
    dbcon.query('SELECT * FROM offline_transaction WHERE id=?', [transaction_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const findall = (offline_transaction, callBack) => {
    dbcon.query('SELECT * FROM offline_transaction ', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM offline_transaction WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


module.exports={add,update,find,findall,remove}
