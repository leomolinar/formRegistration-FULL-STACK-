const parameters = require('../catchInput')
const Sequelize = require('sequelize')
try {
    const sequelize = new Sequelize(`${parameters.dbname}`, `${parameters.username}`, `${parameters.password}`, {
        host: `${parameters.host}`,
        dialect: `${parameters.dialect}`,
        logging: false
    } )

    sequelize.authenticate().then(function() {
        console.log("\x1b[32m"+'Connected to database.\n\nYou can now go to "'+parameters.host+':'+parameters.port+'" on your browser URL')
        console.log("\x1b[0m")
    }).catch(function(erro) {
        console.log("\x1b[31m"+'Failed to connect: '+ erro)
        console.log("\x1b[0m")
        process.exit()
    })
    
    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }

}
catch (e) {
    console.log("\x1b[31m"+'\nError: '+e.message)
    console.log("\x1b[0m")
    process.exit()
}