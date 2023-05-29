require("dotenv").config()

module.exports ={
    NODE_ENV:process.env.NODE_ENV,
    DATABASEURL:process.env.DATABASEURL,
    SECRET:process.env.SECRET
}
