const jwt = require('jsonwebtoken')
const {SECRET} = require('./config')

// requiresAuth
const requiresAuth = async (req,res,next) =>{
    const idToken = req.header("Authorization")
    if(!idToken) {
        return res.status(400).json({status:'error', message:'token not found'})
    } 
    const bearer = idToken.split(' ')
    const token = bearer[1]
    try {
    let data  = jwt.verify(token,SECRET)
    req.user = data     
    next()
    // res.send({status:true, message:'user authenticated'})
    } catch (e) {
        console.log(e)
        return res.status(401).send({status:false, message:e.message})
    }
}

module.exports = {requiresAuth}