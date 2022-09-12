const { add, update, find,findall, remove } = require("./withdrawal_request.service");
const WithdrawalRequest=require('./withdrawal_request.schema')
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



const Add_=(request,response)=>{
   const {user_id,user_type,account_no,ammount}=request.body;
   if(user_id==undefined||user_type==undefined|| account_no==undefined||ammount==undefined)
         response.status(400).json({message:"Invalid Request"});
    else{
        let wreq=new WithdrawalRequest();
        wreq.user_id=user_id;
        wreq.user_type=user_type;
        wreq.account_no=account_no;
        wreq.ammount=ammount;

        add(wreq,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else{
            response.status(201).json({message:"data saved successfully",data:result});
            }     
    });

    }
   
    
}
const Update_=(request,response)=>{
    if(isNaN(request.params.id))
        response.status(400).json({message:"Invalid Request"});
    else{
        find(request.params.id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.length==0)
            response.status(404).json({message:"Invalid request"});
            else 
            {
                let wreq=new WithdrawalRequest();
                wreq=result[0]; 
                let {user_id,user_type,account_no,ammount,status}=request.body;
                wreq.user_id=user_id?user_id:wreq.user_id;
                wreq.user_type=user_type?user_type:wreq.user_type;
                wreq.account_no=account_no?account_no:wreq.account_no;
                wreq.ammount=ammount?ammount:wreq.ammount;
                wreq.status=status==undefined?swreq.status:status;
                update(wreq,(err,res)=>{
                    if(err)
                    response.status(500).json({message:"Internal Server Error"});
                    else 
                    response.status(200).json({message:"data updated successfully",data:wreq});
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
module.exports={Find_,FindAll_,Add_,Update_,Remove_}