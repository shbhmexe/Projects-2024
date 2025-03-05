require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.getConnection()
    .then(() => console.log('✅ MySQL Connected Successfully!'))
    .catch(err => console.error('❌ DB Connection Error:', err));

module.exports = pool;
