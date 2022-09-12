class Associate {
    constructor(associate_id = null, name = "", gender = -1, email = "", phone = "", document_id = 0, pass = "", image = "", status = -1) {
        this.associate_id = associate_id;
        this.name = name == "" ? null : name;
        this.email = email == "" ? null : email;
        this.phone = phone == "" ? null : phone;
        this.document_id = document_id == 0 ? null : document_id;
        this.pass = pass == "" ? null : pass;
        this.image = image == "" ? null : image;
        this.gender=gender==-1?null:gender;
        this.status = status == -1 ? null : status;
    }
}
module.exports = Associate;