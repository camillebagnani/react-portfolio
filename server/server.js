const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const cors = require("cors")

app.use(cors())
require('dotenv').config()

app.post('/', jsonParser, async (req, res) => {

    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
    });

    console.log(req.body)

    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    console.log(name, email, message)

    try {
        const sql =
            `INSERT INTO emails(name, email, message) VALUES ("${name}", "${email}", "${message}")`;

        res.sendStatus(200)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

