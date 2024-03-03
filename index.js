const express = require('express')
const app = express()
const port = 3000

app.post('api/:originalURL', (req, res) => {
  res.send(req.params.originalURL)
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:userId', (req, res) => {
    res.send(req.params.userId)
})

app.get('/client/:clientId', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})