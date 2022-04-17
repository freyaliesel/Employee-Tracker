const mysql = require("mysql2");
const dotenv = require("dotenv").config();

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    console.log(`Connected to the company_db database.`)
);

module.exports = db;
