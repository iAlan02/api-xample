const express = require('express')
const router = express.Router()
const stateRouter = require('./statesRouter')
const cityRouter = require('./citiesRouter')

router.use('/state', stateRouter)
router.use('/city', cityRouter)

module.exports = router