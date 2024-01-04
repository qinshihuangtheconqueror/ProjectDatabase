var router = require('express').Router();
const login = require('../controllers/auth/login.controller');
const register = require('../controllers/auth/register.controller');
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    router.get('/login', authMiddleware.isAuth, login.showLoginForm)
    
    .post('/login', (req, res) => {
        const { email, password, name, phoneNumber, dob } = req.body;
        console.log(req.body);

        if (email && password && !name) {
            login.login(req, res); 
        } else if (email && password && name && phoneNumber && dob) {
            register.register(req, res); 
        }
    })

    .get('/logout', authMiddleware.loggedin, login.logout)
    app.use(router);
}