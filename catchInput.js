//let argv = require('yargs').alias('db','dbname').argv
var argv = require('yargs/yargs')(process.argv.slice(2))
    .alias('d','dbname')
    .alias('u','username')
    .alias('p','password')
    .argv

function usage() {
    console.log('\n Usage: node app -d [database name] -u [database username] -p [database password]\n\n',
    'All arguments: \n',
    '-d, --dbname    Name of database to connect with [required]\n',
    '-u, --username  Username of database to login    [required]\n',
    '-p, --password  Password of dabatase to login    [required]\n',
    '--host          Host to connect (default is set to "localhost")\n',
    '--dialect       SQL dialect to be used, default is set to "mysql" (checkout Sequelize documentation for more options)\n',
    '--port          Port to which express should connect (default is set to 5000)\n',
    '--secret        String used to hash the session (default is "formvalidatorsecret")')
}

let parameters = [{}]

if (argv.help) {
    usage()
    process.exit()
}

if (argv.d) {
    const {dbname} = parameters
    parameters.dbname = argv.d
}
else {
    usage()
    process.exit()
}

if (argv.u) {
    const {username} = parameters
    parameters.username = argv.u
}
else {
    usage()
    process.exit()
}

if (argv.p) {
    const {password} = parameters
    parameters.password =argv.p
}
else {
    usage()
    process.exit()
}

if (argv.host) {
    const {host} = parameters
    parameters.host =argv.host
}
else {
    const {host} = parameters
    parameters.host = 'localhost'
}

if (argv.dialect) {
    const {dialect} = parameters
    parameters.dialect = argv.dialect
}
else {
    const {dialect} = parameters
    parameters.dialect = 'mysql'
}

if  (argv.port){
    const {port} = parameters
    parameters.port =argv.port
}
else {
    const {port} = parameters
    parameters.port = 5000
}

if (argv.secret){
    const {secret} = parameters
    parameters.secret = argv.secret
}
else {
    const {secret} = parameters
    parameters.secret = 'formvalidatorsecret'
}

module.exports = parameters