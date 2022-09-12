const dbcon = require("../../config/mysql_db_config");



const add = (nominee, callBack) => {
    const{name, dob, user_id, user_type}=nominee;
    dbcon.query('INSERT INTO nominee(name, dob, user_id, user_type) VALUES (?,?,?,?)', [name, dob, user_id, user_type], (err, result, fields) => {
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

const update = (nominee, callBack) => {
    const{name, dob, user_id, user_type, status,nominee_id}=nominee;
    dbcon.query('UPDATE nominee SET name=?,dob=?,user_id=?,user_type=?,status=? WHERE nominee_id =?', [name, dob, user_id, user_type, status,nominee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (nominee_id, callBack) => {
    dbcon.query('SELECT * FROM nominee WHERE nominee_id=?', [nominee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const findall = (nominee, callBack) => {
    dbcon.query('SELECT * FROM nominee ', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (nominee_id, callBack) => {
    dbcon.query('DELETE FROM nominee WHERE nominee_id=?', [nominee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
