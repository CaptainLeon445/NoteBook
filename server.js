const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config({path: './config.env'})
const app=require('./app')
const Notes = require("./Models/Note")

const DB=process.env.DATABASE
mongoose.connect(DB, {
    useNewUrlParser: true
}).then(res=>{
    console.log("Database Connected Successfully")
     // Retrieve documents without the '__v' field
    // Notes.find({}, '-__v')
}).catch(err=>{
    console.log("Error in connecting with the database", err)
})

const port=8000;
app.listen(port, ()=>{
    console.log(`Server running on Port ${port}`)
})

