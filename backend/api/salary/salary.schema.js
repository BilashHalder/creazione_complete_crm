class Salary {
    constructor(basic = 0,hra=0,conveyance=0,medical=0,special=0,pf=0,insurance=0,tax=0,salary_id = null,) {
        this.salary_id = salary_id;
        this.basic = basic==""?0:basic;
        this.hra = hra==""?0:hra;
        this.conveyance = conveyance==""?0:conveyance;
        this.medical = medical==""?0:medical;
        this.special = special==""?0:special;
        this.pf = pf==""?0:pf;
        this.insurance = insurance==""?0:insurance;
        this.tax = tax==""?0:tax;
    }
}
module.exports = Salary;