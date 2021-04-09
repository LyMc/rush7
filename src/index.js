const express = require('express')
const birdsRouter = require('./birds')
const getData = require('./data')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.render('index', getData())
})

app.get('/hello', (req, res) => {
  res.send('Hello Digital Nation!')
})

app.use('/', birdsRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
