const states = require('../../utils/states.json') // states json

module.exports = { // export states controller
    getAll: (req, res) => { // get all states
        res.status(200).json(states) // send states
    },
    getByName: (req, res) => { // get state by name
        let state = {} // state
        const notFound = "State not found" // not found
        const stateName = req.params.name // state name

        states.forEach(s => { // for each state
            if (s.name === stateName) { // if state name is equal to state name
                state = s // set state
            }
        })
        if (!state) { // if state is not found
            res.status(404).send(notFound) // send not found
        } else {
            res.status(200).json(state) // send state
        }
    },
    create: (req, res) => { // create state
        res.status(201).send("Created " + JSON.stringify(req.body)) // send created
    },
    update: (req, res) => { // update state
        res.status(200).send("Updated " + JSON.stringify(req.body)) // send updated
    },
    patch: (req, res) => { // patch state
        res.status(200).send("Patched " + JSON.stringify(req.body)) // send patched
    },
    delete: (req, res) => { // delete state
        let state = {} // state
        const notFound = "State not found" // not found
        const stateName = req.params.name // state name

        states.forEach(s => { // for each state
            if (s.name === stateName) { // if state name is equal to state name
                state = s // set state
            }
        })

        if (!state) { // if state is not found
            res.status(404).send(notFound) // send not found
        } else { // if state is found
            res.status(200).send("Deleted " + stateName) // send deleted
        }
    },

}