const express = require('express');
const bodyParser = require('body-parser');
//const ejs = require('ejs');
//const index =require('./view/');

const app = express();
var data ={connection:"No LTE Data Availabe"};

// use the express-static middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.set('view engine','ejs');



app.post('/',(req,res)=>{
    data = req.body;
    res.render('index',{data:data}); 

});

app.get('/',(req,res)=>{

    res.render('index',{data:data});
});

const port = process.env.PORT||80;

app.listen(port,()=>{
    console.log('Papy Your Server is Listening from Port 3000');
})