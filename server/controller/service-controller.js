
const Service=require("../models/service-models");

const services=async(req,res)=>
{
    try {
        
        const response= await Service.find();

        if(!response)
        {
            res.status(404).json({msg:"no service found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(error);
    }

}
module.exports=services;