const {v4:uuidV4} = require('uuid')
const books = require('../data/books')

const booksModels = {
  getBookUserEmail:(email) => {
    const bookVerify = books.find(book => book.email === email)
    return bookVerify
  },
  createBook:(title, author, email, copies) => {
    const newBook = {
      id:uuidV4(),
      title,
      author,
      email,
      copies
    }

    books.push(newBook)
    return newBook
  }
}


module.exports = booksModels