const dbcon = require("../../config/mysql_db_config");


const add = (associate, callBack) => {
    let {name,gender, email, phone,commission_rate,employee_id,pass,image}=associate;
    dbcon.query('INSERT INTO associate(name,gender, email, phone,commission_rate,employee_id,pass,image) VALUES (?,?,?,?,?,?,?,?)',
     [name,gender, email, phone,commission_rate,employee_id,pass,image], (err, result, fields) => {
        if(err)
        {
            console.log(err)
            return callBack(err);
        }
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

const update = (associate, callBack) => {
    const {name,gender, email, phone,commission_rate,employee_id,document_id,pass,image,status,associate_id}=associate;
    dbcon.query('UPDATE associate SET name=?,gender=?,email=?,phone=?,commission_rate=?,employee_id=?,document_id=?,pass=?,image=?,status=? WHERE associate_id=?',
     [name,gender,email, phone,commission_rate,employee_id,document_id,pass,image,status,associate_id], (err, result, fields) => {
        if(err)
        {
            console.log(err)
            return callBack(err);

        }
        else
        return callBack(null,result);
    });
}

const find = (associate_id, callBack) => {
    dbcon.query('SELECT * from associate WHERE associate_id=?', [associate_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (associate_id,callBack) => {
    dbcon.query('SELECT * from associate', (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (associate_id, callBack) => {
    dbcon.query('DELETE FROM associate WHERE associate_id=?', [associate_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findby = (emailorphone, callBack) => {
    dbcon.query('SELECT * from associate WHERE email=? or phone=?', [emailorphone,emailorphone], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

module.exports={add,update,find,findall,remove,findby}
