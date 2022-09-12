const { add, update, find,findall, remove } = require("./bank_account.service");

const BankAccount=require('./bank_account.schema');


let bank_account=new BankAccount();


const Add_=(request,response)=>{
   let {account_no,ifsc_code,branch,user_id,user_type,status}=request.body;
   if(account_no==undefined || ifsc_code==undefined || branch==undefined ||user_id ==undefined ||user_type==undefined )
   response.status(400).json({message:"Invalid Request"});
   //account validate skip
   status=1;
   bank_account={account_no,ifsc_code,branch,user_id,user_type,status}
   find(account_no,(err,result)=>{
    if(err)
    response.status(500).json({message:"Internal Server Error"});
    else if(result.length!=0)
    response.status(400).json({message:"Account Already Used"});
    else{
        add(bank_account,(err,res)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(res.affectedRows)
            response.status(200).json({message:'Account Saved',data:bank_account})
            else
            response.status(500).json({message:"Internal Server Error"});
           }); 
    }
   });    
}

const Update_=(request,response)=>{
    if(isNaN(request.params.id))
        response.status(400).json({message:"Invalid Request"});
    else{
        find(request.params.id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.length==0)
            response.status(404).json({message:"Invalid request "});
            else 
            {
                const { ifsc_code,branch,user_id,user_type,status } = request.body;
                let temp=new BankAccount();
                temp=result[0];
                temp.ifsc_code = ifsc_code ? ifsc_code : temp.ifsc_code;
                temp.branch = branch ? branch : temp.branch;
                temp.user_id = user_id ? user_id : temp.user_id;
                temp.user_type = user_type ? user_type : temp.user_type;
                temp.status = status ? status : temp.status;
                update(temp, (err, res) => {
                    if (err)
                        response.status(500).json({ message: "Internal Server Error" });
                    else
                        response.status(200).json({ message: "data updated successfully", data: temp });
                });
            }
        })
    }
}

const Remove_=(request,response)=>{
    let _id=request.params.id;
    if(isNaN(_id))
    response.status(400).json({message:"Invalid Request"});
    else{
        remove(_id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.affectedRows==0)
            response.status(406).json({message:"No Data Found"});
            else 
            response.status(200).json({message:"Data Deleted Successfully"})
        });
    }  
}

const Find_=(request,response)=>{
    let _id=request.params.id;
    if(isNaN(_id))
    response.status(400).json({message:"Invalid Request"});
    else{
        find(_id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.length==0)
            response.status(404).json({message:"No data found"});
            else 
            response.status(200).json(result)
        });
    }
}

const FindAll_=(request,response)=>{
    findall(null,(err,result)=>{
        if(err)
        response.status(500).json({message:"Internal Server Error"});
        else if(result.length==0)
        response.status(404).json({message:"No data found"});
        else 
        response.status(200).json(result)
    });
}

const UserAccounts=(request,response)=>{
    const {user_id,user_type}=request.body;
    if(isNaN(user_id) && isNaN(user_type) )
    response.status(400).json({message:"Invalid Request"});
    else{
        findall(user_id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.length==0)
            response.status(404).json({message:"No data found"});
            else {
            let res=result.filter((item)=>{if(item.user_id==user_id && item.user_type==user_type)return item} );
            if(res.length==0)
            response.status(404).json({message:"No data found"});
            else
            response.status(200).json(res)
            }
            
        });
    }
}

module.exports={Find_,FindAll_,Add_,Update_,Remove_,UserAccounts}





