const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();


app.listen(process.env.PORT,()=>{
    console.log("starts the server");
});

app.get('/home',(req,res)=>{
    res.json({message:"ok"});
});
