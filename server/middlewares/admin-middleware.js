const jwt=require("jsonwebtoken");
const Adminmiddleware=async(req,res,next)=>
{
    
   const token=req.header("Authorization");

   if(!token)
   {
    res.status(404).json({message:"Not a admin"});
   }
   else{
    const jwttoken=token.replace("Bearer","").trim();
    const isverify=await jwt.verify(jwttoken,""+process.env.JWT_SECRET_KEY);

    const isadmin=isverify.isAdmin;
    if(isadmin===true)
    {
        res.json("not a admin");
    }
    
    next();

   }


}
module.exports=Adminmiddleware;