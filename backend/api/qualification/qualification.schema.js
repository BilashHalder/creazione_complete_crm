class Qualification {
    constructor(id = null, degree_name = "",year_of_pass=-1,degree_from="",marks=-1,document_url="",employee_id=-1,) {
        this.id = id;
        this.degree_name = degree_name == "" ? null : degree_name;
        this.year_of_pass = year_of_pass == -1 ? null : year_of_pass;
        this.degree_from = degree_from == "" ? null : degree_from;
        this.marks = marks == -1 ? null : marks;
        this.document_url = document_url == "" ? null : document_url;
        this.employee_id = employee_id == -1 ? null : employee_id;
    }
}
module.exports = Qualification;