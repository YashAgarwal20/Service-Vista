


const express=require("express");
const cors=require("cors");
const app=express();
const authRoute=require("./router/auth-router.js");
const contactRoute=require("./router/contact-router.js");
const serviceRoute=require("./router/service-router.js");
const adminRoute=require("./router/admin-router.js");

const connectdb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

const corsOptions={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

app.use("/api/admin",adminRoute);
app.use(errorMiddleware);


const PORT=3000;
connectdb().then(()=>
{
    app.listen(PORT,()=>
    {
        console.log(`server running on port ${PORT}`);
    });
});
