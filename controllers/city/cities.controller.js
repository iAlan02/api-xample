const cities = require('../../utils/cities.json') // cities json

module.exports = { // export cities controller
    getAll: (req, res) => { // get all cities
        res.status(200).json(cities) // send cities
    },
    getByName: (req, res) => { // get city by name
        let city = {} // city
        const notFound = "City not found" // not found
        const cityName = req.params.name // city name

        cities.forEach(c => { // for each city
            if (c.name === cityName) { // if city name is equal to city name
                city = c // set city
            }
        })
        if (!city) { // if city is not found
            res.status(404).send(notFound) // send not found
        } else { // if city is found
            res.status(200).json(city) // send city
        }
    },
    create: (req, res) => { // create city
        res.status(201).send("Created " + JSON.stringify(req.body)) // send created
    },
    update: (req, res) => { // update city
        res.status(200).send("Updated " + JSON.stringify(req.body)) // send updated
    },
    patch: (req, res) => { // patch city
        res.status(200).send("Patched " + JSON.stringify(req.body)) // send patched
    },
    remove: (req, res) => { // delete city
        let city = {} // city
        const notFound = "City not found" // not found
        const cityName = req.params.name // city name

        cities.forEach(s => { // for each city
            if (s.name === cityName) { // if city name is equal to city name
                city = s // set city
            }
        })

        if (!city) { // if city is not found
            res.status(404).send(notFound) // send not found
        } else { // if city is found
            res.status(200).send("Deleted " + cityName) // send deleted
        }
    },

}