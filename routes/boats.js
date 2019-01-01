/**
 * Sets URIs for boat pages
 */

'use strict'

const dao = require('../models/dao')
const router = require('express').Router()

router.route('/boats')
    .get(async (req, res) => {
        const allBoats = 
            await dao.getAllBoatsAscendingLengthOrder()

        res.render('boats/all', { allBoats })
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
