require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const middleware = require('./middleware/middleware')
const routes = require('./routes/index')

const port = process.env.PORT
const app = express()


app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

middleware(app)

app.use('/', routes)

app.listen(port, () => {
    console.log("Listening on port ", port)
})