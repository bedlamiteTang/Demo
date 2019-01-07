const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=>{
    res.app.locals.title = 'About';
    res.app.locals.body = 'A Test Page！';
    res.render('layout');
});

module.exports = router;
