const express = require('express');
const path = require('path');
const app = express();
const calcRouter = require('./routes/calc.router');
const bodyParser = require('body-parser');

//app.use(express.static(path.join(__dirname,'..','static')));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'..','views'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(calcRouter);


 app.get('/', (req,res)=>{
     res.render('index',{
         title: "Combinations",
     })
 });
 app.lis
 


module.exports = app;