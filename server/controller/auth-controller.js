const express=require("express");
const User=require("../models/user-model");
const bcrypt=require("bcryptjs");

const home=async (req,res)=>
{
    try {
        res.send("hello");
        
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}
const register=async (req,res)=>
{
    try {

        const {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({message:"email already exists"});

        }
        else
        {
            const userCreated=await User.create({username,email,phone,password});
        res
        .status(201)
         .json({message:userCreated,
        token:await userCreated.generateToken(),
        userId:userCreated._id.toString()
    });
            
        }
        
        
    } catch (error) {
        // res.status(500)
        // .json("internal server error");
        next(error);
        
    }
}

const login=async(req,res)=>
{
    try {
        const {email,password}=req.body;
    const userExist=await User.findOne({email});

    if(!userExist)
    {
        return res.status(400).json({message:"invalid credentials"});
    }
    // const user=await bcrypt.compare(password,userExist.password);
    const user=await userExist.comparepassword(password);
    
    if(user)
    {
        res
        .status(200)
         .json({msg:userExist,
        token:await userExist.generateToken(),
        userId:userExist._id.toString()
         });

    }
    else{
        res.status(401).json({message:"invalid password or email"});
    }

        
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
    
}

const user=async(req,res)=>
{
    try {
        const userData=req.user;
        console.log(userData);
       return res.status(200).json({userData});
        
    } catch (error) {
        console.log(error);
    }

}

module.exports={home,register,login,user};