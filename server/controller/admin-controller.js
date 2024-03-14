const User=require("../models/user-model");
const Contact=require("../models/contact-models");
const Service=require("../models/service-models");
const getAllUsers=async(req,res,next)=>
{
    try {
        const users=await User.find({},{password:0});
        if(!users||users.length===0)
        return res.status(404).json({message:"No Users Found"});
    return res.status(200).json(users);

    } catch (error) {
        next(error);
    }
}

const deleteUserById=async(req,res,next)=>
{
    try {
        
        const id=req.params.id;
        
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"});

        
    } catch (error) {
        next(error);
    }

}

const getUserById=async(req,res,next)=>
{
    try {
        const id=req.params.id;
        const users=await User.findOne({_id:id},{password:0});
        
    return res.status(200).json(users);

    } catch (error) {
        next(error);
    }

}




const getAllContacts=async(req,res,next)=>
{
    try {
        const contacts=await Contact.find();
        if(!contacts||contacts.length===0)
        return res.status(404).json({message:"No Contacts Found"});
    return res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
}

const getAllServices=async(req,res,next)=>
{
    try {
        const services=await Service.find();
        if(!services||services.length===0)
        return res.status(404).json({message:"No Contacts Found"});
    return res.status(200).json(services);

    } catch (error) {
        next(error);
    }
}

module.exports={getAllUsers,getAllContacts,getAllServices,deleteUserById,getUserById};