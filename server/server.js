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
    host: 'localhost',
    user: 'root',
    database: 'website_emails_db',
  });

  // console.log(req.body)

  const name = req.body.name
  const email = req.body.email
  const message = req.body.message

  console.log("SERVER",name, email, message)

  try {
    const sql = `INSERT INTO Emails (name, email, message) VALUES (?, ?, ?)`;
    connection.query(sql, [name, email, message], (err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(500)
      }       
    })
    res.sendStatus(200)

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

