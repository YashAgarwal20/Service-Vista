const {z}=require("zod");

const contactvalidateSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 chars."})
    .max(255,{message:"Name must not be more than 255 characters"}),

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(10,{message:"Phone must be atleast of 10 chars."})
    .max(20,{message:"Phone must not be more than 20 characters"}),

   message:z
    .string({required_error:"Message is required"})
    .trim()
    .min(3,{message:"Message must be atleast of 3 chars."})
    .max(1000,{message:"Message must not be more than 1000 characters"}),
})
module.exports=contactvalidateSchema;