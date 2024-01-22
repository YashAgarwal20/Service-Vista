const express=require("express");

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
        res.send(req.body);
        
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}



module.exports={home,register};