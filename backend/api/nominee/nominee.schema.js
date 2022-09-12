class Nominee {
    constructor(nominee_id = null, name = "",dob="",user_id=-1,user_type=-1,status=-1) {
        this.nominee_id = nominee_id;
        this.name = name == "" ? null : name;
        this.dob = dob == "" ? null : dob;
        this.user_id = user_id == -1 ? null : user_id;
        this.user_type = user_type == -1 ? null : user_type;
        this.status = status == -1 ? null : status;
    }
}
module.exports = Nominee;