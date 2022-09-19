const dbcon = require("../../config/mysql_db_config");



const add = (admin, callBack) => {
    const{name,img,pass}=admin;
    dbcon.query('INSERT INTO admin (name,img,pass) VALUES (?,?,?)', [name,img,pass], (err, result, fields) => {
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



const find = (agreement_id, callBack) => {
    dbcon.query('SELECT * FROM admin WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (admin_id, callBack) => {
    dbcon.query('SELECT * FROM admin', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (id, callBack) => {
    dbcon.query('DELETE FROM admin WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,find,findall,remove}
