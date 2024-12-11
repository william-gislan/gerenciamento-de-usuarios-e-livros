const express = require('express')
const ensureAuth = require('../middlewares/auth-middleware')
const booksController = require('../controllers/books-controller')

const bookUserRoutes = express.Router()



//rotas de consulta e criação para todos os usuarios autenticados
bookUserRoutes.post('/book', ensureAuth, booksController.createBook)
bookUserRoutes.get('/book/show', ensureAuth, booksController.getBookEmail)
bookUserRoutes.put('/book/update/:id', ensureAuth, booksController.updateBook)


module.exports = bookUserRoutes