var express = require('express');
var app = express();

var server = require('http').Server(app);


const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
  server.listen(8080, ()=>{
    console.log('listening for requests on port + dev,',port);
  });

}else{
  server.listen(port, ()=>{
    console.log('listening for requests on port 3000 +server priduction, ',port);
  });
}

// App setup

var bodyParser = require('body-parser');
var fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Load routes
const allocateTask = require('./routes/allocate');
const tasks = require('./routes/tasks');
const assets = require('./routes/assets');
const workers = require('./routes/worker');


var mongoose = require('mongoose');
const db = "mongodb+srv://nitish:sanitsum@cluster0-fjp4h.mongodb.net/stayspace_prod?retryWrites=true";


// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.static('public'));

//load routes
app.use('/workers', workers);
 app.use('/tasks', tasks);
app.use('/assets', assets);
app.use('/allocateTask', allocateTask);


app.use((err , req,res , next)=>{
  console.log(err.message);
  res.json({
    code:400,
    message:err.message
  });
})
