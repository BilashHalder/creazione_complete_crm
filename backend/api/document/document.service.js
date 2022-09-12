const dbcon = require("../../config/mysql_db_config");

const add = (document, callBack) => {
const {adhar_no,pan_no,address,adhar_verified,pan_verified}=document;
    dbcon.query('INSERT INTO document(adhar_no,pan_no,address,adhar_verified,pan_verified) VALUES (?,?,?,?,?)', [adhar_no,pan_no,address,adhar_verified,pan_verified], (err, result, fields) => {
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

const update = (document, callBack) => {
    const {adhar_no,pan_no,address,adhar_verified,pan_verified,document_id}=document;
    dbcon.query('UPDATE document SET adhar_no=,pan_no=,address=,adhar_verified=,pan_verified=? WHERE document_id=?', [adhar_no,pan_no,address,adhar_verified,pan_verified,document_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (document_id, callBack) => {
    dbcon.query('SELECT * FROM document WHERE document_id=?', [document_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM document', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (document_id, callBack) => {
    dbcon.query('DELETE FROM document WHERE document_id=?', [document_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
