const { add, update, find, remove } = require("./employee_info.service");


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
   const {employee_id,designation_id,salary_id,dob,joining_date}=request.body;
   if(employee_id==undefined|| designation_id==undefined|| salary_id==undefined||dob==undefined||joining_date==undefined)
   response.status(400).json({message:"Invalid Request"});
   else{
    add(request.body,(err,result)=>{
        if(err)
        response.status(500).json({message:"Internal Server Error"});
        else {
            response.status(201).json({data:result});
        }
    })
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
                //update logic here
                response.status(200).json(result)
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





