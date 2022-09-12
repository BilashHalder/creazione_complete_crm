const dbcon = require("../../config/mysql_db_config");



const add = (bankAccount, callBack) => {
    const {account_no,ifsc_code,branch,user_id,user_type,status}=bankAccount;
    dbcon.query('INSERT INTO bank_account(account_no,ifsc_code,branch,user_id,user_type,status) VALUES (?,?,?,?,?,?)', [account_no,ifsc_code,branch,user_id,user_type,status], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const update = (bankAccount, callBack) => {
    const {ifsc_code,branch,user_id,user_type,status,account_no}=bankAccount;
    dbcon.query('UPDATE bank_account SET ifsc_code=?,branch=?,user_id=?,user_type=?,status=? WHERE account_no=?', [ifsc_code,branch,user_id,user_type,status,account_no], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (account_no, callBack) => {
    dbcon.query('SELECT * FROM bank_account WHERE account_no=?', [account_no], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findall = (bankAccount, callBack) => {
    dbcon.query('SELECT * FROM bank_account ', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (account_no, callBack) => {
    dbcon.query('DELETE FROM bank_account WHERE account_no=?', [account_no], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

module.exports={add,update,find,findall,remove}
