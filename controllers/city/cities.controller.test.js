const request = require('supertest') // supertest
const server = require('../../server') // server

const cities = require('../../utils/cities.json') // cities json

describe('GET Endpoints', () => { // describe GET Endpoints

    it('Should get all the México cities', async(done) => { // it Should get all the México cities
        const response = await request(server).get('/city/getAll')
        expect(response.status).toBe(200) // expect status
        expect(response.body).toEqual(cities) // expect body
        done() // done
    })
    it('Should get a city by name', async(done) => { // it Should get a city by name
        const cityName = "Aguascalientes"
        const response = await request(server).get(`/city/getByName/${cityName}`) // request
        expect(response.status).toBe(200) // expect status
        expect(response.body).toEqual(cities.find(c => { return c.name === cityName })) // expect body
        done() // done
    })
    afterAll(async() => await server.close())
})

describe('POST Endpoint', () => { // describe POST Endpoint

    it('Should create a new México city', async(done) => { // it Should create a new México city
        const body = { // body
            "id": "1", // id
            "state_id": "40", // state_id
            "key": "040", // key
            "name": "Nueva Laguna", // name
            "initials": "" // initials
        }
        const response = await request(server).post('/city/create').send(body) // request
        expect(response.status).toBe(201) // expect status
        expect(response.text).toEqual("Created " + JSON.stringify(body)) // expect body
        done() // done
    })
    afterAll(async() => await server.close()) // afterAll
})

describe('PUT Endpoint', () => { // describe PUT Endpoint

    it('Should update a México city', async(done) => { // it Should update a México city
        const body = { // body
            "id": "2491", // id
            "state_id": "32", // state_id
            "key": "056", // key
            "name": "Nuevo Zacatecas",
            "initials": "" // initials
        }
        const response = await request(server).put('/city/update').send(body) // request
        expect(response.status).toBe(200) // expect status
        expect(response.text).toEqual("Updated " + JSON.stringify(body)) // expect body
        done() // done
    })
    afterAll(async() => await server.close()) // afterAll
})

describe('PATCH Endpoint', () => { // describe PATCH Endpoint

    it('Should update a México city', async(done) => { // it Should update a México city
        const body = { // body
            "name": "Nuevo Zacatecas" // name
        }
        const response = await request(server).patch('/city/patch').send(body) // request
        expect(response.status).toBe(200) // expect status
        expect(response.text).toEqual("Patched " + JSON.stringify(body)) // expect body
        done() // done
    })
    afterAll(async() => await server.close()) // afterAll
})

describe('DELETE Endpoint', () => { // describe DELETE Endpoint

    it('Should delete a México city', async(done) => { // it Should delete a México city
        const cityName = "Aguascalientes" // city name
        const response = await request(server).delete(`/city/delete/${cityName}`) // request
        expect(response.status).toBe(200) // expect status
        expect(response.text).toEqual("Deleted " + cityName) // expect body
        done() // done
    })
    afterAll(async() => await server.close()) // afterAll
})