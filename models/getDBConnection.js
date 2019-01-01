/**
 * Creates database connection
 */

'use strict'

require('dotenv').config()
const mySql = require('mysql')

module.exports = mySql.createConnection({
    host: process.env.hostname,
    user: process.env.mysql_username,
    password: process.env.mysql_password,
    database: process.env.database_name
})
