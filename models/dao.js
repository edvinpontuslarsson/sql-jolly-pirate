'use strict'

const db = require('./getDBConnection')

const getAllMembers = () =>
    new Promise(async resolve => {
        const members = await getFromDB(
            'SELECT * FROM Members'
        )
        resolve(members)
    })

const getSpecificMemberData = memberID =>
    new Promise(async resolve => {
        const memberData = await getFromDB(
            `SELECT * FROM Members 
            INNER JOIN Boats ON Boats.member_id = Members.member_id 
            WHERE Members.member_id = ${memberID}`
        )
        resolve(memberData)
    })



const getFromDB = sqlQuery => 
    new Promise(resolve => {
        db.query(sqlQuery, (err, result) => {
            if (err) throw err
            resolve(result)
        })
    })

module.exports = {
    getAllMembers,
    getSpecificMemberData
}
