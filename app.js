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
var  sweetalert = require('sweetalert2');
var app = express();

var bodyParser = require ('body-parser');
const { config } = require('process');

// Duong new coding start

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(__dirname+ '/public'));
require('dotenv').config();
app.get('/',(req,res)=>{
    res.render('landingPage');
    });
app.get('/login',(req,res)=>{
    res.render('login');
    });

app.listen(process.env.PORT, function(){
    console.log(`Example app listening on port ${process.env.PORT}`)
  });
// Duong new coding end