const { add, update, find,findall, remove } = require("./request.service");
const Request=require('./request.schema');
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
   
    let {request_type, customer_id, comments}=request.body;

  if(request_type==undefined|| customer_id==undefined)
     response.status(400).json({message:"Invalid Request"});
     else{
        let temp=new Request();
        temp.customer_id=customer_id;
        temp.request_type=request_type;
        temp.comments=comments?comments:"";
        add(temp,(err,result)=>{
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
               
                let temp=new Request();
                temp=result[0]
                const {request_type, customer_id, comments, status}=request.body;
                temp.request_type=request_type?request_type:temp.request_type;
                temp.customer_id=customer_id?customer_id:temp.customer_id;
                temp.comments=comments?comments:temp.comments;
                temp.status=status==undefined?temp.status:status;
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