const mysql = require('mysql2');


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'studentmanagement',
    port:3306
});

module.exports = connection;