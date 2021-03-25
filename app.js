const parameters = require('./catchInput')
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const app = express();
const port = `${parameters.port}`;
const user = require('./models/user')
const { sequelize } = require('./models/db');
const bcrypt = require('bcrypt')
const session = require('express-session');
const {NODE_ENV='development', SESS_NAME='sid', SESS_SECRET=`${parameters.secret}`} = process.env
const IN_PROD = NODE_ENV === 'production'
var message = null

app.use("/static", express.static('./static/'));
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: IN_PROD
    }
}))

const redirectLogin = (req,res,next) => {
    if(req.session.userId) {
        res.redirect('/login')
    }
    else {
        next()
    }
}

const redirectHome = (req,res,next) => {
    if(!req.session.userId) {
        res.redirect('/')
    }
    else {
        next()
    }
}

app.set('view engine', 'ejs')

app.get('/', redirectLogin, (req,res) => {
    const { userId } = req.session
    if (typeof message == null) {
        res.render('index')

    }
    else {
        res.render('index', {message})
        message = null
    }
})

app.get('/register', redirectLogin, (req,res) => {
    res.render('register')
})

app.get('/login', redirectHome, (req,res) => {
    //req.session.userId =
    res.render('login', {
        username_var
    })
})


app.post('/', async (req,res) => {
    const usernameChecker = await user.findOne({where: {username: req.body.usernameORemail_login}})
    const emailChecker = await user.findOne({where: {email: req.body.usernameORemail_login}})


    if (usernameChecker !== null && await bcrypt.compare(req.body.password_login, usernameChecker.dataValues.password)){
        username_var = usernameChecker.dataValues.username
        req.session.userId = usernameChecker.dataValues.id
        res.redirect('/login')
    }
    else if (emailChecker !== null && await bcrypt.compare(req.body.password_login, emailChecker.dataValues.password)){
        username_var = emailChecker.dataValues.username
        req.session.userId = emailChecker.dataValues.id
        res.redirect('/login')
    }
    else {
        message = "Credentials doesn't match"
        res.redirect('/')
    }

})

app.post('/register', [

    check('username_register', 'Please, choose a valid username.')
    .exists({ checkFalsy: true })
    .custom((value, {req}) => (/[a-z]/gi).test(String(value)) === true)
    .withMessage('Your username must contain letters.'),
    check('email_register', 'Please, enter a valid e-mail address')
    .isEmail()
    .custom((value, {req}) => value === req.body.email_register_confirmation)
    .withMessage("It appears your e-mail addresses don't match"),
    check('password_register', "It appears your passwords don't match")
    .custom((value, {req}) => value === req.body.password_register_confirmation)
    .exists({ checkFalsy: true })
    .withMessage('Please choose a password')

],async (req,res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const alert = errors.array()
        res.render('register', {
            alert
        })
    }
    else {
        const usernameExists = await user.findOne({where: {username: req.body.username_register}})
        const emailExists = await user.findOne({where: {email: req.body.email_register}})
        const hashedPassword = await bcrypt.hash(req.body.password_register, 10)
        
        if (emailExists !== null) {
            const alert = [{msg: 'This email address is already in use.'}]
            res.render('register', {
                alert
            })
        }
        else if(emailExists === null && usernameExists !== null) {
            const alert = [{msg: 'This username is already in use.'}]
            res.render('register', {
                alert
            })
        }
        else {
            user.create({
                email: req.body.email_register,
                username: req.body.username_register,
                password: hashedPassword
            })
            message = 'User registered. You can now login'
            res.redirect('/')
        }
    }
})

app.post('/login', (req,res) => {
    req.session.destroy(err => { 
        if(err) {
            return res.redirect('/login')
        }
        res.clearCookie(SESS_NAME)
        res.redirect('/')
    })
})


app.listen(port, () =>{
    console.info("\x1b[32m"+'\nConnected to port '+ port)
    console.log("\x1b[0m")
})