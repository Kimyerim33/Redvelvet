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
      var selectSQL = "select id,pass from hcx where id = '" + req.body.id + "' and pass = " + req.body.pass + "";
    connection.query(selectSQL, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
          if(result == ''){
            res.send('登录失败');
          }
        else {
         
            if (req.body.id=="kyr" && req.body.pass==1234) {
              res.redirect('/index');
            }
            else {
              res.redirect('/gly');
            }
        }
      }
          });
  });
module.exports = router;