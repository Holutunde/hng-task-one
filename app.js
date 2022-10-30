const express = require('express')
const data = require('./server/routes/datas')

const app = express()

const PORT = 1300

app.use(express.json())

app.use('/data', data)

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
