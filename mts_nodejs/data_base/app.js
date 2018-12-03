var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/Mean_Db');

mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{

    if(err)
    {
        console.log('Error in database connection :'+err);
    }
    console.log('connected to database mongodb @ 27017');
});

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));


app.use('/api',route);

//for creating a route to server

//app.get('/',(req,res)=>{
  //// res.send('Welcome to mitosis');
//})

app.listen(port,()=>{
    console.log("server started at port :"+port);
});
