const { add, update, find,findall ,remove } = require("./payment.service");

const Payment=require('./payment.schema')
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
   let {purpose, payment_mode, to_account, ammount, status, transaction_id}=request.body;
   if(purpose==undefined|| payment_mode==undefined|| to_account==undefined|| ammount==undefined|| status==undefined|| transaction_id==undefined)
   response.status(400).json({message:"Invalid Request"});
   else{
    add(request.body,(err,result)=>{
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
                let temp=new Payment();
                temp=result[0];
                const {purpose, payment_mode, to_account, ammount, status, transaction_id}=request.body;
                temp.purpose=purpose?purpose:temp.purpose;
                temp.payment_mode=payment_mode?payment_mode:temp.payment_mode;
                temp.to_account=to_account?to_account:temp.to_account;
                temp.ammount=ammount?ammount:temp.ammount;
                temp.transaction_id=transaction_id?transaction_id:temp.transaction_id;
                temp.status=status?status:temp.status;

                update(temp,(err,res)=>{
                    if(err)
                    response.status(500).json({message:"Internal Server Error"});
                    else 
                    response.status(200).json({message:"data updated successfully",data:temp});
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