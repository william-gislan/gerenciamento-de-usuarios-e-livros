require('dotenv').config()
const express = require('express')
const usersRoutes = require('./routes/users-routes')
const adminRoutes = require('./routes/admin-routes')
const bookUserRoutes = require('./routes/books-users-routes')

const app = express()

app.use(express.json())

app.use(usersRoutes)
app.use(bookUserRoutes)
app.use(adminRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server is running')
})