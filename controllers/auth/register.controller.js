const User = require('../../models/user.model');
const bcrypt = require('bcrypt');
require('dotenv/config');

exports.create = (req, res) => {
    res.render('register');
}

exports.register = (req, res) => {
    const { email, password, name, phoneNumber, dob } = req.body;

    if (email && password && name) {
        User.findByEmail(email, (err, user) => {
            if (err || user) {
                // A user with that email address does not exists
                const conflictError = 'User credentials are exist.';
                res.render('login', { email, password, name, conflictError });
            }
        })

<<<<<<< HEAD
=======
        //bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
>>>>>>> cb456ea (Trying merge)
            // Create a User
            const user = new User({
                name: name,
                email: email,
                password: password
            });
            User.create(user, (err, user) => {
                if (!err) {                    
                    res.redirect('/login');
                }
            })
<<<<<<< HEAD
=======
        //});
>>>>>>> cb456ea (Trying merge)
    } else {
        const conflictError = 'User credentials are exist.';
        res.render('login', { email, password, name, conflictError });
    }
}

