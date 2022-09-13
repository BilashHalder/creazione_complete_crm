const {verify}=require('jsonwebtoken');
module.exports={
    validateTocken:(req,res,next)=>{

        let token=req.get('authorization');
        if(token){
            token=token.slice(7);
            verify(token,'qwerty369',(err,obj)=>{
                if(err)
                res.status(400).json({ message: "Unauthorized Access" });
                else{
                    console.log(obj);
                    next();
                }
            })
    
            
        }
        else{
            res.status(400).json({ message: "Access Denied" });
        }
        

    }
}