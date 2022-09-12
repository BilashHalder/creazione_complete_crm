class Document {
    constructor(document_id = null, adhar_no = "",pan_no="",address="",adhar_verified=99,pan_verified=99) {
        this.document_id = document_id;
        this.adhar_no = adhar_no == "" ? null : adhar_no;
        this.pan_no = pan_no == "" ? null : pan_no;
        this.address = address == "" ? null : address;
        this.adhar_verified = adhar_verified == 99 ? null : adhar_verified;
        this.pan_verified = pan_verified == 99 ? null : pan_verified;

    }
}
module.exports = Document;