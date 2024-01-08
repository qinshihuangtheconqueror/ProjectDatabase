var router = require('express').Router();
var authMiddleware = require('../middlewares/auth.middleware');
const login = require('../controllers/auth/login.controller');
const makeApponitment = require('../controllers/appointment.controller')

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
            res.render('patientSchedule', { user }); 
        } else {
            res.redirect('/login'); 
        }
    });

    router.get('/makeAppointment', authMiddleware.loggedin, (req, res) => {
        res.render('makeAppointment');
    })

    app.post('/makeAppointment', (req, res) => {
        makeApponitment.makeApponitment(req, res);
        // res.render('home', { user });

      })

    router.get('/patientAppointment', authMiddleware.loggedin, (req, res) => {
        res.render('patientAppointment');
    })

    router.get('/updateInfo', (req, res) => {
        res.render('updateInfo');
    })

    router.post('/updateInfo', (req, res) => {
        res.redirect("/login");
    })

    router.get('/patientSchedule', authMiddleware.loggedin, (req, res) => {
        res.render('patientSchedule');
    })    
    
    app.use(router);
}