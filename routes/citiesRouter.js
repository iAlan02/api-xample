const express = require('express')
const router = express.Router()

const cities = require('../controllers/city/cities.controller')

router
    .get('/getAll', cities.getAll)
    .get('/getByName/:name', cities.getByName)
    .post('/create', cities.create)
    .put('/update', cities.update)
    .patch('/patch', cities.patch)
    .delete('/delete/:name', cities.remove)
module.exports = router