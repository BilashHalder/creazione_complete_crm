const dbcon = require("../../config/mysql_db_config");



const add = (salary, callBack) => {
    const{basic,hra,conveyance,medical,special,pf,insurance,tax}=salary;
    dbcon.query('INSERT INTO salary(basic,hra,conveyance,medical,special,pf,insurance,tax) VALUES (?,?,?,?,?,?,?,?)', [basic,hra,conveyance,medical,special,pf,insurance,tax], (err, result, fields) => {
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

const update = (salary, callBack) => {
    const{basic,hra,conveyance,medical,special,pf,insurance,tax,salary_id}=salary;
    dbcon.query('UPDATE salary SET basic=?,hra=?,conveyance=?,medical=?,special=?,pf=?,insurance=?,tax=? WHERE salary_id=?', [basic,hra,conveyance,medical,special,pf,insurance,tax,salary_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (salary_id, callBack) => {
    dbcon.query('SELECT * FROM salary WHERE salary_id=?', [salary_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM salary', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (salary_id, callBack) => {
    dbcon.query('DELETE FROM salary WHERE salary_id=?', [salary_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
