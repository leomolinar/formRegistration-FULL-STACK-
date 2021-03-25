const db = require('./db')

const user = db.sequelize.define('users', {
    email: {
        type: db.Sequelize.STRING
    },
    username: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
})


user.sync()//create if it doesnt exists, does nothing if it already exists

module.exports = user