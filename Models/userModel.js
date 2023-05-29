const mongoose =require("mongoose")

const userDetails= new mongoose.Schema({
    userName:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
{timestamps:true}
)

module.exports=mongoose.model("userdata",userDetails,"userdata")