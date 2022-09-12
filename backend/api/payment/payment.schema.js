class Payment {
    constructor(payment_id = null, transaction_time = "",purpose="",payment_mode="",to_account="",ammount=-1,transaction_id="",status=-1,) {
        this.payment_id = payment_id;
        this.transaction_time = transaction_time == "" ? null : transaction_time;
        this.purpose = purpose == "" ? null : purpose;
        this.payment_mode = payment_mode == "" ? null : payment_mode;
        this.to_account = to_account == "" ? null : to_account;
        this.ammount = ammount == -1 ? null : ammount;
        this.transaction_id = transaction_id == "" ? null : transaction_id;
        this.status = status == -1 ? null : status;
    }
}
module.exports = Payment;