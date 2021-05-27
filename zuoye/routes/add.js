var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('add');
});

router.post('/',(req,res)=>{
    var insertSql = 'insert into hcx(id,pass,confirm_pass) values(?,?,?)';
    connection.query(insertSql, [req.body.id,req.body.pass,req.body.confirm_pass], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/');
        }
    });
    });


module.exports = router;