'use strict'

const dao = require('../../models/dao')
const router = require('express').Router()

router.route('/members')
    .get(async (req, res) => {
        const members = await dao.getAllMembers()
        res.render('members/all', { members })
    })

module.exports = router
