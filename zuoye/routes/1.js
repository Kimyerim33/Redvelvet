var mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: "root",
    password: "root",
    database: "coffee"
});
function select(callback){
    connection.query("SELECT * FROM `a`", function (err, a, fieids) {
        callback(err,a);
    });
}

module.exports = {select};