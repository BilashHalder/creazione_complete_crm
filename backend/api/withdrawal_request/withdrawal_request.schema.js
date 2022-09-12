class WithdrawalRequest {
    constructor(id = null, user_id = -1,user_type=-1,account_no="",ammount=0,request_time="",status=-1) {
        this.id = id;
        this.user_id = user_id == -1 ? null : user_id;
        this.user_type = user_type == -1 ? null : user_type;
        this.account_no = account_no == "" ? null : account_no;
        this.ammount = ammount == -1 ? null : ammount;
        this.request_time = request_time == "" ? null : request_time;
        this.status = status == -1 ? null : status;
    }
}

module.exports = WithdrawalRequest;