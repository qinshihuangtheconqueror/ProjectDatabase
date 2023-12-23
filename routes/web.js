var router = require('express').Router();
var authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    router.get('/home', (req, res) => {
        res.render('home');
    });
    app.use(router);
}