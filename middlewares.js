const express = require("express")
const morgan= require("morgan")
const app=express();
app.use(morgan("dev"))
app.use((req, res, next)=>{
    console.log("Testing LEON's Middleware🧪⚒️")
    next();
})
app.use(express.json())
module.exports= app;

