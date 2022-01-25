const express = require('express') // express
const router = express.Router() // express router

const cities = require('../controllers/city/cities.controller') // cities controller

router // express router
    .get('/getAll', cities.getAll) // get all cities
    .get('/getByName/:name', cities.getByName) // get city by name
    .post('/create', cities.create) // create city
    .put('/update', cities.update) // update city
    .patch('/patch', cities.patch) // patch city
    .delete('/delete/:name', cities.remove) // delete city
module.exports = router // export router