'use strict'

const dao = require('../../models/dao')
const router = require('express').Router()

router.route('/members/:id')
    .get(async (req, res) => {
        const memberID = req.params.id
        const memberData = 
            await dao.getSpecificMemberData(memberID)

        const memberName = memberData[0].member_name

        res.render('members/specific', {
            memberName, memberData
        })
    })

module.exports = router
