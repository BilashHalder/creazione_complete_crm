class Designation {
    constructor(designation_id = null, title = "") {
        this.designation_id = designation_id;
        this.title = title == "" ? null : title;
    }
}
module.exports = Designation;
