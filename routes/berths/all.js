'use strict'

const router = require('express').Router()

router.route('/berths')
    .get((req, res) => {
        res.render('berths/all')
    })

module.exports = router