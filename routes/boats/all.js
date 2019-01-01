'use strict'

const dao = require('../../models/dao')
const router = require('express').Router()

router.route('/boats')
    .get(async (req, res) => {
        res.render('boats/all')
    })

module.exports = router