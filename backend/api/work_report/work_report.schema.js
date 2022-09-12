

class WorkReport {
    constructor(id = null, employee_id = -1,report_date="",start_time="",submit_time="",report="",document_url="",status=-1) {
        this.id = id;
        this.employee_id = employee_id == -1 ? null : employee_id;
        this.report_date = report_date == -1 ? null : report_date;
        this.start_time = start_time == "" ? null : start_time;
        this.submit_time = submit_time == "" ? null : submit_time;
        this.report = report == "" ? null : report;
        this.document_url = document_url == "" ? null : document_url;
        this.status = status == -1 ? null : status;
    }
}

module.exports = WorkReport;