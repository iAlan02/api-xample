const cities = require('../../utils/cities.json')

module.exports = {
    getAll: (req, res) => {
        res.status(200).json(cities)
    },
    getByName: (req, res) => {
        let city = {}
        const notFound = "City not found"
        const cityName = req.params.name

        cities.forEach(c => {
            if (c.name === cityName) {
                city = c
            }
        })
        if (!city) {
            res.status(404).send(notFound)
        } else {
            res.status(200).json(city)
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
    remove: (req, res) => {
        let city = {}
        const notFound = "City not found"
        const cityName = req.params.name

        cities.forEach(s => {
            if (s.name === cityName) {
                city = s
            }
        })

        if (!city) {
            res.status(404).send(notFound)
        } else {
            res.status(200).send("Deleted " + cityName)
        }
    },

}