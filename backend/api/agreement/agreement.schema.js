class Agreement {
    constructor(agreement_id=null,invesment_id=0, file_url="",upload_on="") { 
        this.agreement_id = agreement_id;      
        this.invesment_id=invesment_id==0?null:invesment_id; 
        this.file_url = file_url==""?null:file_url;
        this.upload_on=upload_on==""?null:upload_on;      
    }
  }
module.exports = Agreement;