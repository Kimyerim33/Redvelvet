let express = require('express');
let router = express.Router();
// let User = require('./bean/user1');
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
    var insertSql = 'insert into hcx(id,pass,confirm_pass) values(?,?,?)';
    connection.query(insertSql, [req.body.id,req.body.pass,req.body.confirm_pass], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/login');
        }
    });
    });

module.exports = router;