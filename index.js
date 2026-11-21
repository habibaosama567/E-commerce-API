import express from "express"
import dotenv from "dotenv"
import  {connecToDB}  from "./DB/mongoose.js"
import dns from "dns"

dotenv.config()
dns.setServers(["8.8.8.8","8.8.4.4"])

const app = express()
const port=process.env.PORT||3000


connecToDB()
//listen 
app.listen(port,()=>{
    console.log(`app is running on port : ${port}`)
})