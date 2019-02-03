const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "heka",
    password: "password",
    database: "songbook"
});

connection.connect();

module.exports = connection;