const express = require('express')
const userController = require('../controllers/users-controller')
const ensureAuth = require('../middlewares/auth-middleware')
const authAdmin = require('../middlewares/admin-middleware')
const admiController = require('../controllers/admin-controller')

const usersRoutes = express.Router()

usersRoutes.get('/users',ensureAuth, authAdmin, userController.getAllUsers)
usersRoutes.get('/users/login', userController.login)
usersRoutes.post('/users/newuser', userController.registerUser)

usersRoutes.post('/users/admin/newuser', ensureAuth, authAdmin, admiController.registerUser )

module.exports = usersRoutes