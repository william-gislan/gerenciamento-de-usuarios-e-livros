const jwt = require('jsonwebtoken')
const usersModel = require('../models/users-model')

const ensureAuth = (req, res, next) => {
  const authHeader = req.headers.authorization

  if(!authHeader){
    res.status(401).json({message:'No authorized'})
  }

  const token = authHeader.split(' ')[1]

  try {
    const { id } = jwt.verify(token, process.env.JWT_KEY)
    const user = usersModel.getUserById(id)
    if(!user){
     return res.status(401).json({message:'User not found'})
    }
    req.user = user
  } catch (error) {
    return res.status(401).json({message:'Invalid token'})
  }
}

module.exports = ensureAuth