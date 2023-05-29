const Router=require("express").Router()
const postController = require('../Controllers/postController')
const {requiresAuth} = require('../helper')

Router.post('/addPost', requiresAuth, postController.addPost)
Router.get('/listPost', requiresAuth, postController.listPost)
Router.post('/UpdatePost', requiresAuth, postController.UpdatePost)
Router.delete("/removePost/:postId",requiresAuth,postController.removePost)
Router.get("/getpostbyid/:postId",requiresAuth,postController.getpostbyid)
module.exports=Router