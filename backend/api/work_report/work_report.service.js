const dbcon = require("../../config/mysql_db_config");



const add = (employee_id, callBack) => {
    dbcon.query('INSERT INTO work_report(employee_id, report_date, start_time, status) VALUES (?,CURDATE(),CURTIME(),2)', [employee_id], (err, result, fields) => {
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

const update = (data, callBack) => {
    const {report, document_url, status,report_id}=work_report;
    dbcon.query('UPDATE work_report SET submit_time=CURTIME(),report=?,document_url=?,status=? WHERE report_id=?', [ report, document_url, status,report_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (report_id, callBack) => {
    dbcon.query('SELECT * FROM work_report WHERE report_id=?', [report_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (report_id, callBack) => {
    dbcon.query('SELECT * FROM work_report', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (report_id, callBack) => {
    dbcon.query('DELETE FROM work_report WHERE report_id', [report_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
