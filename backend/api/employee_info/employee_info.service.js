const dbcon = require("../../config/mysql_db_config");



const add = (employee, callBack) => {
    const {employee_id,designation_id,salary_id,dob,report_to,joining_date,acceptance_file, id_card}=employee;
    dbcon.query('INSERT INTO employee_info(employee_id,designation_id,salary_id,dob,report_to,joining_date,acceptance_file, id_card) VALUES (?,?,?,?,?,?,?,?)', [], (err, result, fields) => {
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
    const {employee_id,designation_id,salary_id,dob,report_to,joining_date,acceptance_file, id_card}=employee;
    dbcon.query('UPDATE employee_info SET designation_id=?,salary_id=?,dob=?,report_to=?,joining_date=?,acceptance_file=?,id_card=? WHERE employee_id=?', [designation_id,salary_id,dob,report_to,joining_date,acceptance_file, id_card,employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (employee_id, callBack) => {
    dbcon.query('SELECT * FROM employee_info WHERE employee_id=?', [employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (employee_id, callBack) => {
    dbcon.query('DELETE FROM employee_info WHERE employee_id=?', [employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,remove}
