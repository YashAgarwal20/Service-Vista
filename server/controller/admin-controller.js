const User=require("../models/user-model");
const Contact=require("../models/contact-models");
const Service=require("../models/service-models");
const getAllUsers=async(req,res)=>
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

const getAllContacts=async(req,res)=>
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

const getAllServices=async(req,res)=>
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

module.exports={getAllUsers,getAllContacts,getAllServices};