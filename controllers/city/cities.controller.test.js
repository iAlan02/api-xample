const request = require('supertest')
const server = require('../../server')

const cities = require('../../utils/cities.json')

describe('GET Endpoints', () => {

    it('Should get all the México cities', async(done) => {
        const response = await request(server).get('/city/getAll')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(cities)
        done()
    })
    it('Should get a city by name', async(done) => {
        const cityName = "Tepezalá"
        const response = await request(server).get(`/city/getByName/${cityName}`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(cities.find(c => { return c.name === cityName }))
        done()
    })
    afterAll(async() => await server.close())
})

describe('POST Endpoint', () => {

    it('Should create a new México city', async(done) => {
        const body = {
            "id": "1",
            "state_id": "40",
            "key": "040",
            "name": "Nueva Laguna",
            "initials": ""
        }
        const response = await request(server).post('/city/create').send(body)
        expect(response.status).toBe(201)
        expect(response.text).toEqual("Created " + JSON.stringify(body))
        done()
    })
    afterAll(async() => await server.close())
})

describe('PUT Endpoint', () => {

    it('Should update a México city', async(done) => {
        const body = {
            "id": "2491",
            "state_id": "32",
            "key": "056",
            "name": "Nuevo Zacatecas",
            "initials": ""
        }
        const response = await request(server).put('/city/update').send(body)
        expect(response.status).toBe(200)
        expect(response.text).toEqual("Updated " + JSON.stringify(body))
        done()
    })
    afterAll(async() => await server.close())
})

describe('PATCH Endpoint', () => {

    it('Should update a México city', async(done) => {
        const body = {
            "name": "Nuevo Zacatecas"
        }
        const response = await request(server).patch('/city/patch').send(body)
        expect(response.status).toBe(200)
        expect(response.text).toEqual("Patched " + JSON.stringify(body))
        done()
    })
    afterAll(async() => await server.close())
})

describe('DELETE Endpoint', () => {

    it('Should delete a México city', async(done) => {
        const cityName = "Tepezalá"
        const response = await request(server).delete(`/city/delete/${cityName}`)
        expect(response.status).toBe(200)
        expect(response.text).toEqual("Deleted " + cityName)
        done()
    })
    afterAll(async() => await server.close())
})