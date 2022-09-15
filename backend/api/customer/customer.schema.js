class Customer {
    constructor(customer_id = null, name = "", gender = 99, email = "", phone = "", document_id = 0, pass = "", image = "", status = 99,associate_id=-1) {
        this.customer_id = customer_id;
        this.name = name == "" ? null : name;
        this.email = email == "" ? null : email;
        this.phone = phone == "" ? null : phone;
        this.document_id = document_id == 0 ? null : document_id;
        this.pass = pass == "" ? null : pass;
        this.image = image == "" ? null : image;
        this.status = status == 99 ? null : status;
        this.gender = status == 99 ? null : gender;
        this.associate_id=associate_id==-1?null:associate_id;

    }
}
module.exports = Customer;