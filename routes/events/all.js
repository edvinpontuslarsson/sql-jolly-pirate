'use strict'

const router = require('express').Router()

router.route('/events')
    .get((req, res) => {
        res.render('events/all')
    })

module.exports = router