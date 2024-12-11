const express = require('express')
const ensureAuth = require('../middlewares/auth-middleware')
const authAdmin = require('../middlewares/admin-middleware')
const admiController = require('../controllers/admin-controller')
const userController = require('../controllers/users-controller')

const adminRoutes = express.Router()

adminRoutes.post('/users/admin/newuser', ensureAuth, authAdmin, admiController.registerUser )
adminRoutes.get('/users',ensureAuth, authAdmin, userController.getAllUsers)

// rotas admin para os books
adminRoutes.get('/books/admin', ensureAuth, authAdmin, admiController.show)


module.exports = adminRoutes