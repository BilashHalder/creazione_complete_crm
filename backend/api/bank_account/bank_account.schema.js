class BankAccount {
    constructor(account_no = "", ifsc_code = "", branch = "", user_id = 0, user_type = 0, status = 99) {
        this.account_no = account_no == "" ? null : associate_id;
        this.ifsc_code = ifsc_code == "" ? null : ifsc_code;
        this.branch = branch == "" ? null : branch;
        this.user_id = user_id == 0 ? null : user_id;
        this.user_type = user_type == 0 ? null : user_type;
        this.status = status == 99 ? null : status;
    }
}
module.exports = BankAccount;