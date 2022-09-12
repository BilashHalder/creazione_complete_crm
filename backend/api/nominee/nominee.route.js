const router=require("express").Router();
const {Find_,FindAll_,Add_,Update_,Remove_,UserNominee}=require('./nominee.controller');


/*******************************************
 * To handle all Valid Request
 *******************************************/

 router.get("/:id",Find_);
 router.post("/user/",UserNominee);
 router.get("/",FindAll_);
 router.post("/",Add_);
 router.put("/:id",Update_);
 router.delete("/:id",Remove_);

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
         response.status(500).json({ status:"failed", message:"invalid request" }); 
        });  

module.exports=router;
