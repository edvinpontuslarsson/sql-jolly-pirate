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

/*
app.use('/', require('./routes/berths/all'))
app.use('/', require('./routes/berths/specific'))
app.use('/', require('./routes/events/all'))
app.use('/', require('./routes/events/specific'))
app.use('/', require('./routes/members/all'))
app.use('/', require('./routes/members/newest'))
app.use('/', require('./routes/members/earliest'))
app.use('/', require('./routes/members/specific'))
*/

// sets 404 not found-route
app.use((req, res, next) => {
    const error = new Error()
    error.status = 404
    next(error)
})

// error setting
app.use((err, req, res) => {
    if(err.status === 404) {
        return res.status(404)
            .sendFile(path.join(__dirname, 'views', 'errors', '404.html'))
    }

    // for unhandled internal errors
    console.log(err)
    return res.status(500)
        .sendFile(path.join(__dirname, 'views', 'errors', '500.html'))
})

const port = 8080

app.listen(port, () => {
    console.log(`argh, server started on port ${port}`)
})
