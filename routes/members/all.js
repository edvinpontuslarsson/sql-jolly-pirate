'use strict'

const dao = require('../../models/dao')
const router = require('express').Router()

router.route('/members')
    .get(async (req, res) => {
        const members = await dao.getAllMembers()
        console.log(members)
        res.render('members/all')
    })

module.exports = router