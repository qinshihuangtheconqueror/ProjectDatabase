module.exports = app => {
    //require('./auth')(app);
    require('./admin')(app);
    require('./web')(app);
}