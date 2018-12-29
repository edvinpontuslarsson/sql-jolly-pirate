'use strict'

const router = require('express').Router()

router.route('/members')
    .get((req, res) => {
        res.render('members/all')
    })

module.exports = router