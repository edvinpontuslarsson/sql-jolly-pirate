'use strict'

const dao = require('../models/dao')
const router = require('express').Router()

router.route('/boats')
    .get(async (req, res) => {
        res.render('boats/all')
    })

router.route('/boats/biggest')
    .get(async (req, res) => {
        const boatLength = 
            await dao.getBiggestBoatlength()
        
        res.render('boats/biggest', { boatLength })
    })

router.route('/boats/smallest')
    .get(async (req, res) => {
        const boatLength =
            await dao.getSmallestBoatLength()

        res.render('boats/smallest', { boatLength })
    })

module.exports = router
