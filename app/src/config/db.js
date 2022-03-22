"use strict";

import mysql from 'mysql';
import './env.js';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_DATABASE,
})

db.connect();

export default db;