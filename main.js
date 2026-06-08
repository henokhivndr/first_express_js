const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req,res) => {
    const sql = "SELECT * FROM product"
    db.query(sql, (error, result) => {
        response(200, result, "List of data", res)
    })
})

app.get('/find', (req,res) => {
    const sql = `SELECT * FROM product WHERE id = ${req.query.id}`
    db.query(sql, (error, result) => {
        response(200, result, "Detail data", res)
    })
})

app.post('/', (req, res) => {
    //mengambil semua data yang di request dari body Postman atau FE
    const {name, description, price, stock} = req.body

    //query sql untuk insert data ke database
    const sql = 'INSERT INTO product (name, description, price, stock) VALUES (?, ?, ?, ?)'

    //masukkan value name, description, price, stock kedalam query sql INSERT
    db.query(sql, [name, description, price, stock], (error, result) => {
        response(201, result, "Product Added Successfully", res)
    })
})

app.put('/edit', (req, res) => {
    const {name, description, price, stock} = req.body
    const sql = `UPDATE product SET name = ?, description = ?, price = ?, stock = ? WHERE id = ${req.query.id}`

    db.query(sql, [name, description, price, stock], (error, result) => {
        response(200, result, "Product Updated Successfully", res)
    })
})

app.delete('/delete', (req, res) => {
    const sql = `DELETE FROM product WHERE id = ${req.query.id}`

    db.query(sql, (error, result) => {
        response(200, result, "Product Deleted Successfully", res)
    })
})

app.listen(port, () => {
    console.log(`Example app is running on port ${port}`)
})