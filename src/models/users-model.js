const users = require("../data/Users")
const {v4:uuidV4} = require('uuid')
const bcrypt = require('bcrypt')

const usersModel = {
  getAllUsers: () => {
    return users
  },
  getUserById:(id) => {
      return users.find(user => user.id === id)
  },
  getUserEmail:(email) => {
    return users.find(user => user.email === email)
  },
  createUser: (name, email, password, role) => {
    const newUser = {
      id: uuidV4(),
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      role
    }
    users.push(newUser)
    return newUser
  },
  deleteUser: (id) => {
    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex === -1){
      return null
    }
    const userDelete = users[userIndex]
    users.splice(userIndex, 1)
    return userDelete
  },
  updateUser:(id, updateUser) => {
    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex === -1){
      return null
    }
    users[userIndex] = {...users[userIndex], ...updateUser}
  }
}

module.exports = usersModel