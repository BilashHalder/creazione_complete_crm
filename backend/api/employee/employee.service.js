const dbcon = require("../../config/mysql_db_config");


const add = (employee, callBack) => {
    let {name,gender, email, phone,document_id,pass,image}=employee;
    dbcon.query('INSERT INTO employee(name,gender, email, phone,document_id,pass,image) VALUES (?,?,?,?,?,?,?)',
     [name,gender, email, phone,document_id,pass,image], (err, result, fields) => {
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

const update = (employee, callBack) => {
    const {name,gender, email, phone,document_id,pass,image,status,employee_id}=employee;
    dbcon.query('UPDATE employee SET name=?,gender=?,email=?,phone=?,document_id=?,pass=?,image=?,status=? WHERE employee_id=?',
     [name,gender,email, phone,document_id,pass,image,status,employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (employee_id, callBack) => {
    dbcon.query('SELECT * from employee WHERE employee_id=?', [employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (employee_id,callBack) => {
    dbcon.query('SELECT * from employee', (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (employee_id, callBack) => {
    dbcon.query('DELETE FROM employee WHERE employee_id=?', [employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findby = (emailorphone, callBack) => {
    dbcon.query('SELECT * from employee WHERE email=? or phone=?', [emailorphone,emailorphone], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

module.exports={add,update,find,findall,remove,findby}
