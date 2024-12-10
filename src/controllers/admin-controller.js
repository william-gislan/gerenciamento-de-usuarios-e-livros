const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersModel = require('../models/users-model')
const booksModels = require('../models/books-models')

const admiController = {
  show:(req, res) => {
    const books = booksModels.getBooks()
    res.json(books)
  },
  registerUser:(req, res) => {
    const { name, email, password, role } = req.body
  
    if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || typeof role !== 'string'){
      res.status(400).json({message:'Data incompleted'})
    }
    //verifica o email
  
    const verifyUser = usersModel.getUserEmail(email)
  
    if(verifyUser){
      res.status(400).json({message:'User already exists'})
    }
  
    const newUser = usersModel.createUser(name, email, password, role)
    res.json({...newUser, password:undefined})
  },
  
}



module.exports = admiController