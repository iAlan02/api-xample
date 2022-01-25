const express = require('express') // express
const router = express.Router() // express router

const states = require('../controllers/state/states.controller') // states controller

router // express router
    .get('/getAll', states.getAll) // get all states
    .get('/getByName/:name', states.getByName) // get state by name
    .post('/create', states.create) // create state
    .put('/update', states.update) // update state
    .patch('/patch', states.patch) // patch state
    .delete('/delete/:name', states.delete) // delete state
module.exports = router // export router