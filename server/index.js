const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8080
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite



app.listen(port, async () => {
    console.log(`Todo Server app listening at http://localhost:${port}`)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  })

app.get('/', (req, res) => {
  res.send('App Working!!')
})

