module.exports = app => {
    var router = require('express').Router();
    router.get('/adminDoctors',(req,res)=>{
        res.render('adminDoctors');
    });
    
    router.get('/adminAnalyst',(req,res)=>{
        res.render('adminAnalyst');
    });
    
    router.get('/adminDoctors/in4',(req,res)=>{
            res.render('adminDoctorIn4');
    });
    app.use(router);
}