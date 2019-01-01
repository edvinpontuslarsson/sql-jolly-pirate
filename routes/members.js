/**
 * Sets URIs for member pages
 */

'use strict'

const dao = require('../models/dao')
const router = require('express').Router()

router.route('/members')
    .get(async (req, res) => {
        const members = await dao.getAllMembers()
        res.render('members/all', { members })
    })

router.route('/members/:id')
    .get(async (req, res) => {
        const memberID = req.params.id
        const memberData = 
            await dao.getSpecificMemberData(memberID)
        
        if(memberData.length >= 1) {
            const memberName = memberData[0].member_name

            res.render('members/specific', {
                memberName, memberData
            })
        } else {
            res.status(404)
            res.redirect('/404')
        }
    })

module.exports = router
