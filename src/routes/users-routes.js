const express = require('express')
const userController = require('../controllers/users-controller')
const ensureAuth = require('../middlewares/auth-middleware')
const authAdmin = require('../middlewares/admin-middleware')
const admiController = require('../controllers/admin-controller')
const booksController = require('../controllers/books-controller')

const usersRoutes = express.Router()

//rotas de usuarios

usersRoutes.get('/users/login', userController.login)
usersRoutes.post('/users/newuser', userController.registerUser)
//colocar a rota de auth novamente







module.exports = usersRoutes