let express = require('express');
let router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "users"
});
connection.connect();

router.get('/',(req,res)=>{
    res.render('register');
});

router.post('/',(req,res)=>{
    var insertSql = 'insert into hcx(username,email,password,password2) values(?,?,?,?)';
    connection.query(insertSql, [req.body.username,req.body.email,req.body.password,req.body.password2], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/login');
        }
    });
    });



module.exports = router;