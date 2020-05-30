const express = require('express');

const app = express();


// use the express-static middleware
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.send("Welcome to the home page ");
})

const port = process.env.PORT||80;

app.listen(port,()=>{
    console.log('Papy Your Server is Listening from Port 3000');
})