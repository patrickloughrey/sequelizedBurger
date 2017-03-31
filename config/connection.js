'use strict'

var mysql = require('mysql');
var app = require('../server');
var connection;

/* Create the mySQL connection using node */
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

/* Make connection */
connection.connect();

/* Export the connection */
module.exports = connection;