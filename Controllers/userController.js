const userModel=require("../Models/userModel")
const {SECRET} = require('../config')
const jwt = require('jsonwebtoken')


exports.login = async(req,res) => {
    try {
        let found = await userModel.findOne({email:req.body.email})
        if(found) {
            if(found.password == req.body.password) {
                let token = jwt.sign({found,exp:Math.floor(Date.now() / 1000) + (600 * 60)},SECRET)
                    res.send({status:true,message:"User logged in",data:found,token:token}) 
            }
        } else {
            res.status(400).json({status:false, message:'user not found'})
        }
    } catch (e) {
        res.status(500).json({status:false,message:e.message})
    }
}