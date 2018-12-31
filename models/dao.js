'use strict'

const db = require('./getDBConnection')

const getAllMembers = () =>
    new Promise(resolve => resolve(
        getFromDB(
            'Query here'
        )
    ))

// Should not be promise 
const getFromDB = (sqlQuery) => 
    db.query(sqlQuery, (err, result) => {
        if (err) throw err
        return result
    })

module.exports = {

}
