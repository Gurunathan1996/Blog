const postModel = require("../Models/postModel")

// addPost
exports.addPost = async(req,res) => {
    try {
        let postJson ={
            user:req.user.found._id,
            image:req.body.image,
            description:req.body.description,
            title:req.body.title,
            hashtag:req.body.hashtag
        } 
        let created= await postModel.create(postJson)
        if(created){
            res.status(200).json({status:true,message:"post Uploaded",data:created})
        }else{
            res.status(400).json({status:false,message:"post not Uploaded"})
        }
    }catch(e){
        res.status(500).json({status:false,message:e.message})
    }
}

// listPost
exports.listPost = async (req,res) => {
    try {
        let skip = 0
        if (req.query.page !== 1) {
            skip = (req.query.page - 1) * 10
        }
        let found = await postModel.find({user:req.user.found._id}).skip(skip)
        if(found.length > 0) {
            res.status(200).json({status:true, message:"post list", data:found})
        } else {
            res.status(400).json({status:false, message:"No post list data"})
        }
    } catch (e) {
        res.status(500).json({status:false,message:e.message})
    }
}

// updatePost

exports.UpdatePost= async(req,res)=>{
    try{
        let userupdate =await postModel.findOneAndUpdate({_id:req.body.postId},req.body)
       if(userupdate){
        res.status(200).json({status:true,message:"Post Edited"})
       }else{
        res.status(400).json({status:false, message:"No Post found"})
       }
    }catch(e){
        res.status(500).json({status:false,message:e.message})
    }
}

// Delete Post

exports.removePost=async(req,res)=>{
    try{
        let removePost= await postModel.deleteOne({_id:req.params.PostId})
        if(removePost){
            res.status(200).json({status:true,message:"Post Removed"})
        }else{
            res.status(400).json({status:false,message:"Post not removed"})
        }
    }catch(e){
            res.status(500).json({status:false,message:e.message})
    }
}

// getpostbyid

exports.getpostbyid=async(req,res)=>{
    try{
        let found= await postModel.findById(req.params.postId)
        if(found){
            res.status(200).json({status:true,message:"Post found",data:found})
        }else{
            res.status(400).json({status:false,message:"Post not found"})
        }

    }catch(e){
        res.status(500).json({status:false,message:e.message})
    }
}



