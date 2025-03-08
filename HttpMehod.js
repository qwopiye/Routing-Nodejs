const express=require("express");
const router=express.Router();

router.get("/about",(req,res)=>{
    res.send("this is routing running aboutes page")
})

router.get("/register",(req,res)=>{
    router.cookies("Name","Sohan");
    router.cookies("age",23);
    res.end();

//     res.send("this is running register page");
 })

router.get("/login",(req,res)=>{
    res.send("this is running login page");
})

router.use((req,res)=>{
   
    res.send("<h1>this is route is no valid</h1>")
})
module.exports=router;
