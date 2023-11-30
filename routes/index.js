const express = require('express') // express
const router = express.Router() // express router
const stateRouter = require('./statesRouter') // states router
const cityRouter = require('./citiesRouter') // cities router

router.use('/state', stateRouter) // use states router
router.use('/city', cityRouter) // use cities router
router.use('/', (req, res) => { // root route
    res.send('Hello World!') // send hello world
})

module.exports = router // export router