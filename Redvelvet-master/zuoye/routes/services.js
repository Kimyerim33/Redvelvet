var express = require('express');
var router = express.Router();
var db = require('./bean/db');

router.get('/',function(req,res,next){
    res.render('services');
});

module.exports = router;