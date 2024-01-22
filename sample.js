const express=require('express');
const path=require('path');//join
const bodyParser=require('body-parser');//data feed to the server
const app=express();//predefined function call
const port=8000;

//this is middleware function which is used to parse the data from the form to the server
app.use(bodyParser.urlencoded({extended:false}));
// app.get('/',(req,res)=>{
//     return res.send('Welcome to the home page');
// });
//send file
// app.get('/',(req,res)=>{
//     return res.sendFile("./index.html");
// });

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'index.html'));
});

//to get the data from the form to the server
app.post("/api/v1/register",(req,res)=>{
    res.send(
        `<h1>Redirect</h1>
        <h2>Username:${req.body.username}</h2>
        <h2>Email:${req.body.email}</h2>
        <h2>Password:${req.body.password}</h2>
        `
    );
    console.log(req.body);
});

//sample
// app.post("/api/v1/register",(req,res)=>{
//     res.send("<h1>Redirect</h1>");
//     console.log(req.body);
    // return res.json({
    //     message:"Data received"
    // });
//     return res.send("<h1 background-color='red'>You are at the post page</h1>");
// });


// app.post('/',(req,res)=>{
//     console.log("post request for home");
// });

//data feed to the server
// app.post('/',(req,res)=>{
//     return res.send('You are at the post page');
// });

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});