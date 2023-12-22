const express = require('express');
const routerAdmin = express.Router();

routerAdmin.get('/adminDoctors',(req,res)=>{
    res.render('adminDoctors');
    });

routerAdmin.get('/adminAnalyst',(req,res)=>{
    res.render('adminAnalyst');
    });
routerAdmin.get('/adminDoctors/in4',(req,res)=>{
        res.render('adminDoctorIn4');
    });

module.exports.routerAdmin = routerAdmin;