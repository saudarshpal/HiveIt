import mongoose, { mongo } from "mongoose";
import { DB_URL } from "../config";

mongoose.connect(DB_URL)

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true,
        minLength : 5,
        maxLength : 20,
    },
    email : {
        type : String,
        unique : true,
        required : true,       
    },
    password : {
        type : String,
        required : true,
        minLength : 8,
    },
    followers : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    following : [
        {
            type : mongoose.Schema.Types.ObjectId,
        }
    ],
    profile : {
        bio :{
            type : String,
            maxLength : 150,
        }
    }
})

const User = mongoose.model('User',userSchema)

export default User