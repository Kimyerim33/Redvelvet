var express = require('express');
var router = express.Router();
var db=require('./bean/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from a",(err,result)=>{
    res.render('users', { data:result});
  })
 
});

module.exports = router;