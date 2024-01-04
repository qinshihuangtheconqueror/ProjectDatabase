var router = require('express').Router();
const login = require('../controllers/auth/login.controller');
const register = require('../controllers/auth/register.controller');
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    router.get('/login', authMiddleware.isAuth, login.showLoginForm)
    //.post('/login', login.login)

    .post('/login', (req, res) => {
        const { email, password, name, phoneNumber, dob } = req.body;
        console.log(req.body);

        if (email && password && !name) {
            // Login logic if email, password are present, and 'name' is absent
            // Example: Using login.login function (replace this with your actual login logic)
            login.login(req, res); // Assuming login.login handles the login process
        } else if (email && password && name && phoneNumber && dob) {
            // Signup logic if email, password, 'name', 'phoneNumber', and 'dob' are all present
            // Example: Using register.register function (replace this with your actual signup logic)
            register.register(req, res); // Assuming register.register handles signup process
        }
    })

    .get('/logout', authMiddleware.loggedin, login.logout)
    app.use(router);
}