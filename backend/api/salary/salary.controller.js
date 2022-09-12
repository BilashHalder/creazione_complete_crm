const { add, update, find,findall, remove } = require("./salary.service");
const Salary=require('./salary.schema');

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
   const {basic,hra,conveyance,medical,special,pf,insurance,tax}=request.body;
   if(basic==undefined|| hra==undefined||conveyance==undefined||medical==undefined||special==undefined||pf==undefined||insurance==undefined||tax==undefined)
   response.status(400).json({message:"Invalid Request"});
   else{
    let salary=new Salary(basic,hra,conveyance,medical,special,pf,insurance,tax);
    add(salary,(err,result)=>{
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
                 let salary=new Salary();
                 salary=result[0];   
                 const {basic,hra,conveyance,medical,special,pf,insurance,tax}=request.body;
                 salary.basic=basic?basic:salary.basic;
                 salary.hra=hra?hra:salary.hra;
                 salary.conveyance=conveyance?conveyance:salary.conveyance;
                 salary.medical=medical?medical:salary.medical;
                 salary.special=special?special:salary.special;
                 salary.pf=pf?pf:salary.pf;
                 salary.insurance=insurance?insurance:salary.insurance;
                 salary.tax=tax?tax:salary.tax;
                    update(salary,(err,res)=>{
                        if(err)
                        response.status(500).json({message:"Internal Server Error"});
                        else 
                        response.status(200).json({message:"data updated successfully",data:salary});
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