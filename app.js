var express = require ('express');
var session = require ('express-session');
var cookie = require ('cookie-parser');
var path = require ('path');
var ejs= require ('ejs');
var multer = require('multer');
var path = require ('path');
var async = require ('async');
var nodmailer = require ('nodemailer');
var crypto = require ('crypto');
var expressValidator = require ('express-validator');
var sweetalert = require('sweetalert2');
var app = express();
var bodyParser = require ('body-parser');
var { config } = require('process');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
  }
}));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(__dirname+ '/public'));
require('dotenv').config();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}))

app.get('/',(req,res)=>{
  res.render('landingPage');
});

require('./routes/router')(app);

app.listen(process.env.PORT, function(){
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
});