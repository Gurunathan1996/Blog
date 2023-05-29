const mongoose =require("mongoose")

const postDetails= new mongoose.Schema({
     image:{
        type:String
     },
     description:{
        type:String
     },
     title:{
        type:String
     },
     hashtag:{
        type:String
     },
     user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"userdata"
     }
},
{timestamps:true}
)

module.exports=mongoose.model("postdetails",postDetails,"postdetails")