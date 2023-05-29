const Router=require("express").Router()
const userController = require('../Controllers/userController')

Router.post("/login",userController.login)




module.exports=Router