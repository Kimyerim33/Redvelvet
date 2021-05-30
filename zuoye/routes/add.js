var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('add');
});

router.post('/',(req,res)=>{
    var insertSql = 'insert into a(id,coffee_name,coffee_value) values(?,?,?)';
    connection.query(insertSql, [req.body.id,req.body.coffee_name,req.body.coffee_value], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/');
        }
    });
    });


module.exports = router;