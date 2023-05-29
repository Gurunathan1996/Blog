let express=require("express")
let bodyparser=require("body-parser")
const app = express()
const {DATABASEURL} =require("./config")
var mongoose=require("mongoose")

mongoose.connect(DATABASEURL,{
    useNewUrlParser:true,
    useunifiedTopology:true
}).then(()=>{console.log("DB Connected")})

app.use(express.json())
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.send({status:true,message:"App Working"})
})

const userRoutes=require("./Routers/userRoutes")
const postRoutes=require("./Routers/postRoutes")

app.use("/api/user",userRoutes)
app.use("/api/post", postRoutes)

app.listen(8000,()=>{
    console.log("App running on port 8000")
})