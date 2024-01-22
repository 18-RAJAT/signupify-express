const express=require('express');
const path=require('path');//join
const app=express();//predefined function call
const port=8000;

// app.get('/',(req,res)=>{
//     return res.send('Welcome to the home page');
// });
//send file
// app.get('/',(req,res)=>{
//     return res.sendFile("./index.html");
// });

app.get('/',(req,res)=>{
    console.log(__dirname);
    return res.sendFile(path.join(__dirname,'index.html'));
});

//data feed to the server
// app.post('/',(req,res)=>{
//     return res.send('You are at the post page');
// });

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});