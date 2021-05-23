var setting = require('../setting');
var mysql = require("mysql");
var db = {};
db.query = function (sql,callback){
    var connect = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'dbl',
        port:3306
    }
    );
    connect.connect();
    connect.query(sql,function(err,row,fields){
        callback(row);
    });
    connect.end();
};
module.exports = db;

// var first = require("../models/db");
// const { router } = require('../app');

// router.get('/',function(req,res,next){
//     first.query("select * from users",function(rows){
//         console.log(rows)
//     });
//     first.query("insert into user(username,password) value('1','2')",function(rows){
//         console.log(rows)
//     });
//     res.render('index',{title:'Express'});
// });