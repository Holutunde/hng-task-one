const express = require('express')
const router = express.Router()

const { getData, operation } = require('../controllers/data')

router.route('/').get(getData)

router.route('/operation').post(operation)

module.exports = router
