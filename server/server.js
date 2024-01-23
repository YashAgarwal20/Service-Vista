require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./router/auth-router.js");
const coonectdb=require("./utils/db.js");
const connectdb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
app.use(express.json());
app.use("/api/auth",router);
app.use(errorMiddleware);


const PORT=3000;
connectdb().then(()=>
{
    app.listen(PORT,()=>
    {
        console.log(`server running on port ${PORT}`);
    });
});
