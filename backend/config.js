import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

export const connectToDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB Connected : ${connect.connection.host}`)
    }catch(err){
        console.log("Error Connecting To DataBase",err)
        process.exit(1)
    }
}

const PORT_NO = process.env.PORT
const JWT_TOKEN = process.env.JWT_SECRET

export {
    PORT_NO,
    JWT_TOKEN
}







