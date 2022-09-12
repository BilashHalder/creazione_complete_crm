class Invesment {
    constructor(investment_id = null, ammount = 0,date_time="",roi=-1,nominee_id=-1,account_no="",payment_id="",agreement_id=-1,status=-1) {
        this.investment_id = investment_id;
        this.ammount = ammount == 0 ? null : ammount;
        this.date_time = date_time == "" ? null : date_time;
        this.address = address == "" ? null : address;
        this.roi = roi == -1 ? null : roi;
        this.nominee_id = nominee_id == -1 ? null : nominee_id;
        this.account_no = account_no == "" ? null : account_no;
        this.payment_id = payment_id == "" ? null : payment_id;
        this.agreement_id = agreement_id == -1 ? null : agreement_id;
        this.status = status == -1 ? null : status;
    }
}

module.exports = Invesment;