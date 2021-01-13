const express = require('express')
const router = express.Router()

const states = require('../controllers/states.controller')

router
    .get('/getAll', states.getAll)
    .get('/getByName/:name', states.getByName)
    .post('/create', states.create)
    .put('/update', states.update)
    .patch('/patch', states.patch)
    .delete('/delete', states.delete)
module.exports = router