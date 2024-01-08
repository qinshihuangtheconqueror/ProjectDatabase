exports.loggedin = (req, res, next) => {
    if (req.session.loggedinUser) {
        res.locals.user = req.session.user
        next();
    } else {
        res.redirect('/login')
    }
}

exports.isAuth = (req, res, next) => {
<<<<<<< HEAD
    if (req.session.loggedin) {
=======
    if (req.session.loggedinUser) {
    } else {
    }
}