const mongoose=require("mongoose");

const serviceSchema=new mongoose.Schema({
    work:{type:String,required:true},
    pay:{type:String,required:true},
    address:{type:String,required:true},
});

const Service=new mongoose.model('Service',serviceSchema);

module.exports=Service;