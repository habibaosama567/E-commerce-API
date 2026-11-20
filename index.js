require("dotenv").config();
const app=require("./app");
const connectDB=require("./DB/connection");
const PORT=process.env.PORT||5000;
const StartServer=async()=>
{
    await connectDB()
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`)
    })
}
StartServer();