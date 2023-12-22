const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require('express').Router();

    router.get('/landingPage', authMiddleware.loggedin, (req, res) => {
        res.render('landingPage');
    });

    app.use(router);
}