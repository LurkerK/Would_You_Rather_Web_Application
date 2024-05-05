const express = require('express')

const indexRouter = require('./routes/index')

const app = express()

app.use('/', indexRouter)

// Start the server on the specified port or port 3000 if none
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})