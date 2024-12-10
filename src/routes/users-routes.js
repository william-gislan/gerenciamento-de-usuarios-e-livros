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


//rotas de consulta e criação para todos os usuarios autenticados
usersRoutes.post('/book', ensureAuth, booksController.createBook)
usersRoutes.get('/book/show', ensureAuth, booksController.getBookEmail)
usersRoutes.put('/book/update/:id', ensureAuth, booksController.updateBook)

//rotas admin de usuarios
usersRoutes.post('/users/admin/newuser', ensureAuth, authAdmin, admiController.registerUser )
usersRoutes.get('/users',ensureAuth, authAdmin, userController.getAllUsers)

// rotas admin para os books
usersRoutes.get('/books/admin', ensureAuth, authAdmin, admiController.show)

module.exports = usersRoutes