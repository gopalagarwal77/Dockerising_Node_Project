const express = require('express');

const app = express();


app.listen(3000,()=>{
    console.log("starts the server");
});

app.get('/home',(req,res)=>{
    res.json({message:"ok"});
});
