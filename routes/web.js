var router = require('express').Router();
var authMiddleware = require('../middlewares/auth.middleware');
const login = require('../controllers/auth/login.controller');

module.exports = app => {
    router.get('/', (req, res) => {
        res.render('landingPage');
    });

    router.get('/landingPage', (req, res) => {
        res.render('landingPage');
    });

    router.get('/home', authMiddleware.loggedin, (req, res) => {
        const user = req.session.user;
        if (user) {
            res.render('home', { user }); 
        } else {
            res.redirect('/login'); 
        }
    });

    router.get('/makeAppointment', authMiddleware.loggedin, (req, res) => {
        res.render('makeAppointment');
    })

    router.get('/patientAppointment', authMiddleware.loggedin, (req, res) => {
        res.render('patientAppointment');
    })

    router.get('/patientSchedule', authMiddleware.loggedin, (req, res) => {
        res.render('patientSchedule');
    })    
    
    app.use(router);
}