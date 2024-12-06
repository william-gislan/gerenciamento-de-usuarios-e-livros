require('dotenv').config()
const express = require('express')
const usersRoutes = require('./routes/users-routes')

const app = express()

app.use(express.json())

app.use(usersRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server is running')
})