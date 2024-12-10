const usersModel = require("../models/users-model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userController = {
  getAllUsers: (req, res) => {
    const allUsers = usersModel.getAllUsers()
    res.status(200).json(allUsers)
  },

  getUserById:(req, res) => {
    const { id } = req.params

    if(!id){
      res.status(401).json({message:'ID not found'})
    }
    const user = usersModel.getUserById(id)

    if(!user){
      res.status(401).json({message:'user not found'})
    }
    res.json(user)
  },
  registerUser:(req, res) => {
    const { name, email, password, role } = req.body

    if(role === 'admin'){
      res.status(403).json({message:'Permision denied for user admin'})
    }

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
  login:(req, res) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
      return res.status(401).json({message:'Authorization header required'})
    }
    console.log(authHeader)
    const [ hastype, hash ] = authHeader.split(' ')

    if(hastype !== 'Basic'){
      return res.status(400).json('Invalid authorization')
    }

    const [ email, password ] = Buffer.from(hash, 'base64').toString().split(':')

    const emailVerify = usersModel.getUserEmail(email)

    if(!emailVerify){
      return res.status(401).json({message:'User not found'})
    }

    const isValidPassword = bcrypt.compareSync(password, emailVerify.password)

    if(!isValidPassword){
      return res.status(400).json({message:'Invalid password'})
    }

    const payload = {id:emailVerify.id, email:emailVerify.email, role:emailVerify.role}
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn:"1h"
    })

    res.json(token)
  }
}

module.exports = userController