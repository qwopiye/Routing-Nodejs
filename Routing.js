const express=require('express');
const app=express();
const userRoute=require('./userRou');
app.use("/api/user",userRoute);

app.use("/about",(req,res)=>{
    res.sendFile(__dirname+"/index1.html");
})

app.use("/register",(req,res)=>{
     res.sendFile(__dirname+"/index2.html");
 })

app.use("/login",(req,res)=>{
    res.sendFile(__dirname+"/index3.html");
})


module.exports=app;
