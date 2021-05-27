var express = require('express');
var router = express.Router();
var db = require('./bean/db');

router.get('/',function(req,res,next){
db.sql("select * from `a`",(err,rows)=>{
    console.log(err);
    console.log(rows);
    res.render('gly',{data:rows});
})
});

router.get('/add',(req,res)=>{
res.render('add');
})

router.post('/add',(req,res)=>{
db.sqlparam("insert into coffee(id,coffee_name,coffee_value) values(?,?,?)",[
    req.body.id,
    req.body.coffee_name,
    req.body.coffee_value
],(err,rows)=>{
    res.redirect('/')
})
});

module.exports=router;