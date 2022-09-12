const { add, update, find,findall, remove } = require("./nominee.service");

const Nominee=require('./nominee.schema');
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
   let {name, dob, user_id, user_type}=request.body;
   if(name==undefined|| dob==undefined|| user_id==undefined|| user_type==undefined)
   response.status(400).json({message:"Invalid Request"});
   else{
    let nominee=new Nominee();
    nominee.name=name;
    nominee.dob=dob;
    nominee.user_id=user_id;
    nominee.user_type=user_type;
    add(nominee,(err,result)=>{
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
                const { name,dob,user_id,user_type,status} = request.body;
                let temp=new Nominee();
                temp=result[0];
                temp.name = name ? name : temp.name;
                temp.dob = dob ? dob : temp.dob;
                temp.user_id = user_id ? user_id : temp.user_id;
                temp.user_type = user_type ? user_type : temp.user_type;
                temp.status = status==undefined ? temp.status : status;
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


const UserNominee=(request,response)=>{
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
module.exports={Find_,FindAll_,Add_,Update_,Remove_,UserNominee}