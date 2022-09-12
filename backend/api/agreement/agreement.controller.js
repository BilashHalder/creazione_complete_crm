const { add, update, find,findall, remove } = require("./agreement.service");
const Agreement=require('./agreement.schema')
const agreement=new Agreement()
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
    let data = request.body;
    if(data.invesment_id==undefined || isNaN(data.invesment_id))
    response.status(400).json({message:"Invalid Request"});
    else if(request.files == undefined)
    response.status(400).json({message:"Invalid Request"});
    else if(request.files.agreement == undefined)
    response.status(400).json({message:"Invalid Request"});
    else{
     let agreementPdf = request.files.agreement;  
     originalname = agreementPdf.name;
     fileExt = originalname.split('.').at(-1);
     if(fileExt!='pdf')
     response.status(400).json({message:"Invalid File Type"});
     else if(agreementPdf.size>5000000)
     response.status(400).json({message:"File size To large"});
    else{
        console.log(agreementPdf.md5)
        let newName=agreementPdf.md5+'#_#'+Date.now()+''+'.' + fileExt;
       let uploadPath=(__dirname + '../../../uploads/agreements/'+newName);
       agreementPdf.mv(uploadPath, function (err) {
            if (err)
            response.status(500).json({message:"Internal Server Error"});
            else {
                agreement.file_url=newName;
                agreement.invesment_id=data.invesment_id;
                add(agreement,(err,result)=>{
                        if(err)
                        response.status(500).json({message:"Internal Server Error"});
                        else{
                        response.status(201).json({message:"data saved successfully",data:result});
                        }     
                });
            }
        }); 
    }

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





