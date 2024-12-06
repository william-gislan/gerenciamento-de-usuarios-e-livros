const bcrypt = require('bcrypt')

let users = [
  {
    id:'1',
    name:'William Alves',
    email:'william@email',
    password:bcrypt.hashSync('1234',10),
    role:'user'
  },
  {
    id:'2',
    name:'Ana Alves',
    email:'ana@email',
    password:bcrypt.hashSync('1234',10),
    role:'admin'
  }
]

module.exports = users