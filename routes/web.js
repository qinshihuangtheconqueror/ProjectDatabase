var router = require('express').Router();
var authMiddleware = require('../middlewares/auth.middleware');
<<<<<<< HEAD
=======
const login = require('../controllers/auth/login.controller');
>>>>>>> cb456ea (Trying merge)

module.exports = app => {
    router.get('/landingPage', (req, res) => {
        res.render('landingPage');
    });

    router.get('/home', authMiddleware.loggedin,(req, res) => {
        res.render('home');
    });
    
<<<<<<< HEAD
    router.get('/makeAppointment', (req, res) => {
        res.render('makeAppointment');
    })

    router.get('/patientAppointment', (req, res) => {
        res.render('patientAppointment');
    })

    router.get('/patientSchedule', (req, res) => {
        res.render('patientSchedule');
    })

=======
>>>>>>> cb456ea (Trying merge)
    app.use(router);
}