const dbcon = require("../../config/mysql_db_config");



const add = (qualifiaction, callBack) => {
    const {degree_name, year_of_pass, degree_from,marks,document_url, employee_id}=qualifiaction;
    dbcon.query('INSERT INTO qualification(degree_name, year_of_pass, degree_from,marks,document_url, employee_id) VALUES (?,?,?,?,?,?)', [degree_name, year_of_pass, degree_from,marks,document_url, employee_id], (err, result, fields) => {
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

const update = (qualifiaction, callBack) => {
    const {degree_name, year_of_pass, degree_from,marks,document_url, employee_id,id}=qualifiaction;
    dbcon.query('UPDATE qualification SET degree_name=?,year_of_pass=?,degree_from=?,marks=?,document_url=?,employee_id=? WHERE id=?', [degree_name, year_of_pass, degree_from,marks,document_url, employee_id,id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (id, callBack) => {
    dbcon.query('SELECT * FROM qualification WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findall = (id, callBack) => {
    dbcon.query('SELECT * FROM qualification ', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM qualification WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
