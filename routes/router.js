const express = require('express');
const router = express();

router.use('/admin', require('./admin').routerAdmin);
router.use('/', require('./general').router);

module.exports.router = router;