import mongoose from "mongoose";
import { DB_URL } from "../config";

mongoose.connect(DB_URL)

const communitySchema = new mongoose.Schema({
      name : {
        type :String,
        required : true,
        unique : true,
        maxLength : 30
      },
      admin :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
      },
      moderators : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'User'
      },
      title : {
        type : String,
        required : true,
        maxLength : 50,
      },
      description : {
        type : String,
        required : true 
      },
      created : {
        type : Date,
        default : new Date.now()
      },
      subscribers : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
      },
      count : {
            subscribers :{
                type : Number,
                default : 0,
            },
            posts : {
                type :Number,
                default : 0,
            }
      }   
})


const Community = new mongoose.model('Community',communitySchema)

export default Community