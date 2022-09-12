const dbcon = require("../../config/mysql_db_config");



const add = (investment, callBack) => {
    const {ammount, date_time, roi, nominee_id, account_no, payment_id, agreement_id, status}=investment;
    dbcon.query('INSERT INTO investment(ammount,date_time,roi,nominee_id,account_no,payment_id,agreement_id,status) VALUES (?,?,?,?,?,?,?,?,?)', [ammount, date_time, roi, nominee_id, account_no, payment_id, agreement_id, status], (err, result, fields) => {
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

const update = (data, callBack) => {
    const {ammount, date_time, roi, nominee_id, account_no, payment_id, agreement_id, status,investment_id}=investment;
    dbcon.query('UPDATE investment SET ammount=?,date_time=?,roi=?,nominee_id=?,account_no=?,payment_id=?,agreement_id=?,status=? WHERE investment_id=?', [ammount, date_time, roi, nominee_id, account_no, payment_id, agreement_id, status,investment_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (investment_id, callBack) => {
    dbcon.query('SELECT * FROM investment WHERE investment_id=?', [investment_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findall = (investment_id, callBack) => {
    dbcon.query('SELECT * FROM investment', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (investment_id, callBack) => {
    dbcon.query('DELETE FROM investment WHERE investment_id=?', [investment_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
