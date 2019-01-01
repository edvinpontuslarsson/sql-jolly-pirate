'use strict'

const db = require('./getDBConnection')

const getAllMembers = () =>
    new Promise(async resolve => {
        const members = await getFromDB(
            'SELECT * FROM Members'
        )

        resolve(members)
    })

const getFromDB = sqlQuery => 
    new Promise(resolve => {
        db.query(sqlQuery, (err, result) => {
            if (err) throw err
            resolve(result)
        })
    })

module.exports = {
    getAllMembers
}
