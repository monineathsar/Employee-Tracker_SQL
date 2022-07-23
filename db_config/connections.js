require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.nextTick.DB_PASSWORD,
    database: 'employee_db',
}).promise();

module.exports = connection;