const mysql = require("mysql2");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({extended: false}));

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    console.log(`Connected to the company_db database.`)
);