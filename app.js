/**
 * File for general application settings
 * 
 * The code in this file is inspired by an earlier project
 * I have made, here is the source code for that:
 * https://github.com/edvinpontuslarsson/youedvin
 */

'use strict'

const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

// generates express application
const app = express()

// settings for view engine
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

// sets path to public directory for static files
app.use(express.static(path.join(__dirname, 'public')))

// sets routes
app.use('/', require('./routes/index'))
app.use('/', require('./routes/members'))
app.use('/', require('./routes/boats'))

// sets 404 not found error
app.use((req, res, next) => {
    const error = new Error()
    error.status = 404
    next(error)
})

// error setting
app.use((err, req, res, next) => {
    if(err.status === 404) {
        res.status(404)
        return res.render('errors/404')
    }

    // for unhandled internal errors
    console.log(err)
    
    return res.status(500)
        .sendFile(path.join(__dirname, 'views', 'errors', '500.html'))
})

const port = 8080

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
