const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("Welcome to the home page ");
})

const port = process.env.port||80;

app.listen(port,()=>{
    console.log('Papy Your Server is Listening from Port 3000');
})