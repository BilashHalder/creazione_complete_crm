const { add, update, find,findall, remove } = require("./document.service");
const Document=require('./document.schema');
const document=new Document();
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
 const {adhar_no,pan_no,address} =request.body; 
  if(adhar_no==undefined || pan_no==undefined||address==undefined)
  response.status(400).json({message:"Invalid Request"});
  else{
    //adhar and pan verification
    document.adhar_verified=1;
    document.pan_verified=1;
    document.adhar_no=adhar_no;
    document.pan_no=pan_no;
    document.address=address;
    add(document,(err,result)=>{
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





