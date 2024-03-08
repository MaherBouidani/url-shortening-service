import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import initilizationDatabase from './db/db.js';

const app = express()
const port = 3000


initilizationDatabase()
// .then(() => {
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// })
// .catch((err) => {
//   console.error('Failed to initialize database:', err);
//   process.exit(1); // Exit the application with an error code
// });

app.get('/api/:originalURL', (req, res) => {
  console.log(req.params)
  res.send(req.params.originalURL)
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:userId', (req, res) => {
    console.log(req.params)
    res.send(req.params.userId)
})

app.get('/client/:clientId', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})