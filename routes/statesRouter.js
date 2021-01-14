const express = require('express')
const router = express.Router()

const states = require('../controllers/state/states.controller')

router
    .get('/getAll', states.getAll)
    .get('/getByName/:name', states.getByName)
    .post('/create', states.create)
    .put('/update', states.update)
    .patch('/patch', states.patch)
    .delete('/delete/:name', states.delete)
module.exports = router