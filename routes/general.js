const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../models/database');
const bcrypt = require('bcrypt');

router.get('/',(req,res)=>{
    res.render('landingPage');
    });

router.get('/login',(req,res)=>{
    res.render('login');
});

module.exports.router = router;