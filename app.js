const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', 'views');
app.use(express.static(__dirname+ '/public'));

app.use(express.static('app/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// app.get('/adminAnalyst',(req,res)=>{
//     res.render('adminAnalyst');
//     });
// app.get('/adminDoctors/in4',(req,res)=>{
//         res.render('adminDoctorIn4');
//     });
// app.get('/adminPatient',(req,res)=>{
//         res.render('adminPatient');
// });
// app.get('/adminPatient/in4',(req,res)=>{
//     res.render('adminPatientIn4');
// });
// app.get('/adminAppointment',(req,res)=>{
//     res.render('adminAppointment');
// });
// app.get('/makeAppointment',(req,res)=>{
//     res.render('makeAppointment');
// });
// app.get('/adminDoctors',(req,res)=>{
//     res.render('adminDoctors');
// });
app.get('/landingPage',(req,res)=>{
    res.render('landingPage');
    });
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}))



require('./routes/router')(app);

app.listen(process.env.PORT, function(){
    console.log(`Example app listening on port http://localhost:3000`)
});

var bodyParser = require ('body-parser')

