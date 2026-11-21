import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const connecToDB = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log(`DB connected successfully`)
    }).catch((error) => {
        console.log(`errore : ${error}`)
    })
} 