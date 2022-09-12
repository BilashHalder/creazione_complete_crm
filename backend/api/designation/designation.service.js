const dbcon = require("../../config/mysql_db_config");



const add = (title, callBack) => {
    dbcon.query('INSERT INTO designation(title) VALUES (?)', [title], (err, result, fields) => {
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

const update = (designation, callBack) => {
    const {designation_id,title}=designation;
    dbcon.query('UPDATE designation SET title=? WHERE designation_id=?', [title,designation_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (designation_id, callBack) => {
    dbcon.query('SELECT * FROM designation WHERE designation_id=?', [designation_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM designation', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (designation_id, callBack) => {
    dbcon.query('DELETE FROM designation WHERE designation_id=?', [designation_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
