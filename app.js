const express = require('express')
const datas = require('./server/routes/datas')

const app = express()

const PORT = 5000

app.use(express.json())

app.use('/', datas)

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
