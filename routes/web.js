var router = require('express').Router();
var authMiddleware = require('../middlewares/auth.middleware');
const login = require('../controllers/auth/login.controller');

module.exports = app => {
    router.get('/', (req, res) => {
        res.render('landingPage');
    });

    router.get('/home', authMiddleware.loggedin,(req, res) => {
        res.render('home');
    });
    
    router.get('/makeAppointment', (req, res) => {
        res.render('makeAppointment');
    })

    router.get('/patientAppointment', (req, res) => {
        res.render('patientAppointment');
    })

    router.get('/patientSchedule', (req, res) => {
        res.render('patientSchedule');
    })

    app.use(router);
}