var express = require('express');
var router = express.Router();
var mysql =require('mysql');

var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'users'
});
connection.connect();

router.get('/', (req, res)=> {
  res.render('login');
});

router.post('/',(req,res)=>{
      var selectSQL = "select username,password from hcx where username = '" + req.body.username + "' and password = " + req.body.password + "";
    connection.query(selectSQL, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
          if(result == ''){
            res.send('登录失败!请重新登录');
          }
        else {
         
            if (req.body.username=="kyr" && req.body.password==1234) {
              res.redirect('/zsgc');
            }
            else {
              res.redirect('/users');
            }
        }
      }
          });
  });
module.exports = router;