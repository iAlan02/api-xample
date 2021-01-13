const middleware = (app) => {
    app.use('/state/create', (req, res, next) => {
        console.log(req.headers)
        if (req.headers.apikey) {
            const receivedApiKey = req.headers.apikey
            const apiKey = process.env.API_KEY
            console.log(receivedApiKey, apiKey)
            const authorizedAction = "Authorized action"
            if (apiKey === receivedApiKey) {
                req.body.authorized = authorizedAction
            }
            console.log(req.body)
        }
        next()
    })
}

module.exports = middleware