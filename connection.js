const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_tutorial"
})

module.exports = db