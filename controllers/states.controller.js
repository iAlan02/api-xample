const states = require('../utils/states.json')

module.exports = {
    getAll: (req, res) => {
        res.status(200).json(states)
    },
    getByName: (req, res) => {
        let state = {}
        const notFound = "State not found"
        const stateName = req.params.name

        states.forEach(s => {
            if (s.name === stateName) {
                state = s
            }
        })
        if (!state) {
            res.status(404).send(notFound)
        } else {
            res.status(200).json(state)
        }
    },
    create: (req, res) => {
        res.status(201).send("Created " + JSON.stringify(req.body))
    },
    update: (req, res) => {
        res.status(200).send("Updated " + JSON.stringify(req.body))
    },
    patch: (req, res) => {
        res.status(200).send("Patched " + JSON.stringify(req.body))
    },
    delete: (req, res) => {
        let state = {}
        const notFound = "State not found"
        const stateName = req.params.name

        states.forEach(s => {
            if (s.name === stateName) {
                state = s
            }
        })

        if (!state) {
            res.status(404).send(notFound)
        } else {
            res.status(200).send("Deleted " + stateName)
        }
    },

}