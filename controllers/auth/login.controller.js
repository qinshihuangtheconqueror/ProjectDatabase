const User = require('../../models/user.model');

exports.showLoginForm = (req, res) => {
    res.render('login');
}

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        User.findByEmail(email, (err, user) => {
            if (!user) {
                res.redirect('/login');
            } else {
<<<<<<< HEAD
=======
                //bcrypt.compare(password, user.password, (err, result) => {
>>>>>>> b766b3b1486b0b2df6ae8c8b1937e62a82f72a05
                    if (password == user.Password) {
                        req.session.loggedin = true;
                        req.session.user = user;
                        res.redirect('/home');
                    } else {
                        // A user with that email address does not exists
                        const conflictError = 'User credentials are not valid!';
                        res.render('login', { email, password, conflictError });
                    }
<<<<<<< HEAD
=======
                //})
>>>>>>> b766b3b1486b0b2df6ae8c8b1937e62a82f72a05
            }
        })
    } else {
        // A user with that email address does not exists
        const conflictError = 'No matched account!';
        res.render('login', { email, password, conflictError });
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) res.redirect('/500');
        res.redirect('/');
    })
}