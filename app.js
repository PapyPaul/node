const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var data ="No LTE Data Availabe";

// use the express-static middleware
app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Welcome to the home page ");
});

app.post('/',(req,res)=>{
    data = req.body;
     res.send(data);
})

const port = process.env.PORT||80;

app.listen(port,()=>{
    console.log('Papy Your Server is Listening from Port 3000');
})