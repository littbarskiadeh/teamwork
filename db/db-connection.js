const Pool = require('pg').Pool
require('dotenv').config()

const pass = process.env.PASSWORD;
const dbUser = process.env.DBUSER;

const pool = new Pool({
    user: dbUser,
    host: 'localhost',
    database: 'user_db',
    password: pass,
    port: 5432,
})


module.exports = {
    pool
}