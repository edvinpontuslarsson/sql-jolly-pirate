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

const getBiggestBoatlength = () =>
    new Promise(async resolve => {
        const result = await getFromDB(
            'SELECT MAX(boat_length) AS boat_length FROM Boats'
        )
        resolve(result[0].boat_length)
    })

const getSmallestBoatLength = () =>
    new Promise(async resolve => {
        const result = await getFromDB(
            'SELECT MIN(boat_length) AS boat_length FROM Boats'
        )
        resolve(result[0].boat_length)
    })

// 5: all boats, with member name, grouped by boat size min - max

const getFromDB = sqlQuery => 
    new Promise(resolve => {
        db.query(sqlQuery, (err, result) => {
            if (err) throw err
            resolve(result)
        })
    })

module.exports = {
    getAllMembers,
    getSpecificMemberData,
    getBiggestBoatlength,
    getSmallestBoatLength
}
