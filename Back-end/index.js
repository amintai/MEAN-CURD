var http = require('http');
var express = require('express');

var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
//app.use(bodyParser.JSON());


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Clementius' ,{ useCreateIndex: true,
useNewUrlParser: true , 
useUnifiedTopology: true }, (err) => {
    if(!err) {
        console.log('Mongoose Connection Succeeded');
    } else {
        console.log(`Error in DB Connection ${JSON.stringify(err , undefined ,2)}`);
    }
});


app.use(cors());
app.use('/', appRoutes);

http.createServer(app).listen(port);

console.log(`Backend runing on port : ${port}`);