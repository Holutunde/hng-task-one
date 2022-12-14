require('dotenv').config()
const express = require('express')
const datas = require('./server/routes/datas')

const app = express()

const port = process.env.PORT || 6000

app.use(express.json())

app.use('/', datas)

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    )
  } catch (error) {
    console.log(error)
  }
}

start()
