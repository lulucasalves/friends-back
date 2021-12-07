const express = require('express')

const app = express()

app.get('', (req, res) => {
  return res.send('get')
})

app.post('/post', (req, res) => {
  return res.send('post')
})

app.listen(5000, () => {
  console.log('server is running!')
})
