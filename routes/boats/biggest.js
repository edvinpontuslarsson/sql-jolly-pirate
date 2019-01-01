'use strict'

const dao = require('../../models/dao')
const router = require('express').Router()

router.route('/boats/biggest')
    .get(async (req, res) => {
        const boatLength = 
            await dao.getBiggestBoatlength()
        
        res.render('boats/biggest', { boatLength })
    })

module.exports = router
