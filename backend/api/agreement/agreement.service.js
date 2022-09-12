const dbcon = require("../../config/mysql_db_config");



const add = (agreement, callBack) => {
    const{invesment_id,file_url}=agreement;
    dbcon.query('INSERT INTO agreement (invesment_id,file_url) VALUES (?,?)', [invesment_id,file_url], (err, result, fields) => {
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

const update = (agreement, callBack) => {
    dbcon.query('UPDATE agreement SET upload_on=CURRENT_TIMESTAMP,invesment_id=?,file_url=? WHERE agreement_id=?', [agreement.agreement_id,agreement.invesment_id,agreement.file_url], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (agreement_id, callBack) => {
    dbcon.query('SELECT * FROM agreement WHERE agreement_id=?', [agreement_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (agreement_id, callBack) => {
    dbcon.query('SELECT * FROM agreement', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (agreement_id, callBack) => {
    dbcon.query('DELETE FROM agreement WHERE agreement_id=?', [agreement_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
