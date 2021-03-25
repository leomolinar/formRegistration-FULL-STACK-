# formRegistration-FULL-STACK-
Form integrated with database to store and check users made up with NodeJS (along with many libraries like express, body-parser, session, sequelize, etc), HTML5 and Bootstrap
This form has both server side and client side validation.
The passwords registered are stored hashed.

Attention: You MUST have a SQL database installed on your machine in order for this code to work properly.

 Usage: node app -d [database name] -u [database username] -p [database password]

 All arguments:
 -d, --dbname    Name of database to connect with [required]
 -u, --username  Username of database to login    [required]
 -p, --password  Password of dabatase to login    [required]
 --host          Host to connect (default is set to "localhost")
 --dialect       SQL dialect to be used, default is set to "mysql" (checkout Sequelize documentation for more options)
 --port          Port to which express should connect (default is set to 5000)
 --secret        String used to hash the session (default is "formvalidatorsecret")
