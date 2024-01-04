module.exports = app => {
<<<<<<< HEAD
    require('./auth.user')(app);
    require('./admin')(app);
    require('./web')(app);
    require('./auth.admin')(app);
=======
    require('./auth')(app);
    require('./admin')(app);
    require('./web')(app);
>>>>>>> cb456ea (Trying merge)
}