// imports

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');



var app = express();

const route = require('./route/route');


mongoose.connect('mongodb://localhost:27017/semproj');

mongoose.connection.on('connected',()=>{
   console.log('Connected to database semproj'); 
});

mongoose.connection.on('error',(err)=>{
  if(err){
     console.log('error: '+err);
     }
    
 
});
 


// port number 
const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.get('/',(req,res)=>{
   res.send('foobar'); 
});


app.listen(port,()=>{
           console.log('server started at :'+port);
        });