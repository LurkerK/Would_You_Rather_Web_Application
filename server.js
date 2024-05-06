const express = require('express')

// Importing the index router from './routes/index'
const indexRouter = require('./routes/index')

// Create an Express application
const app = express()

// Use the index router for requests to the root URL ('/')
app.use('/', indexRouter)

// Start the server on the specified port or port 3000 if none
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})