require('dotenv').config() // load .env file
const express = require('express') // express framework
const morgan = require('morgan') // logger
const cookieParser = require('cookie-parser') // cookie parser

const middleware = require('./middleware/middleware') // middleware
const routes = require('./routes/index') // routes

const port = process.env.PORT // port
const app = express() // express app


app.use(express.json()) // for parsing application/json
app.use(morgan('dev')) // for logging
app.use(cookieParser()) // for parsing cookies

middleware(app) // middleware

app.use('/', routes) // routes

const server = app.listen(port) // server

module.exports = server // export server