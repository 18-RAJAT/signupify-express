const express=require('express');
const path=require('path');//join
const bodyParser=require('body-parser');

const app=express();
const port=8000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());//request send in json format from body
app.get("/api/v1/userdata",(req,res)=>{
    res.json({
        name:"Alex",
        email:"Alex12@gmail.com",
        password:"123456Alex",
    });
});

app.post("/api/v1/register",(req,res)=>{
    // const userName=req.body.name;
    // const userEmail=req.body.email;
    // const userPassword=req.body.password;
    res.json({
        message:"User registered successfully",
        success:true,
        // name:userName,
        // email:userEmail,
        // password:userPassword,
    });
});
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});