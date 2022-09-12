class EmployeeInfo {
    constructor(employee_id = 0,designation_id=0,salary_id=0, dob ="", report_to = -1, joining_date = "", acceptance_file = "", id_card = -1) {
        this.employee_id = employee_id==0?null:employee_id;
        this.designation_id = designation_id==0?null:designation_id;
        this.salary_id = salary_id==0?null:salary_id;
        this.dob = dob == "" ? null : dob;
        this.report_to = report_to == -1 ? null : report_to;
        this.joining_date = joining_date == "" ? null : joining_date;
        this.acceptance_file = acceptance_file == "" ? null : acceptance_file;
        this.id_card = id_card == -1 ? null : id_card;
    }
}

module.exports = EmployeeInfo;