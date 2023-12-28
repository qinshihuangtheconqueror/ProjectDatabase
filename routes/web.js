var router = require('express').Router();
var authMiddleware = require('../middlewares/auth.middleware');
const login = require('../controllers/auth/login.controller');

module.exports = app => {
    router.get('/landingPage', (req, res) => {
        res.render('landingPage');
    });

    router.get('/home', authMiddleware.loggedin,(req, res) => {
        res.render('home');
    });
    
    app.use(router);
}