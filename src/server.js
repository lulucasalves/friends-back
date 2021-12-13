require('reflect-metadata')
require('./database')
const express = require('express')

const app = express()

app.listen(5000, () => {
  console.log('server is running!')
})
