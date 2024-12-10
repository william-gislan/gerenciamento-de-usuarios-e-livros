const {v4:uuidV4} = require('uuid')
const books = require('../data/books')

const booksModels = {
  getBooks:() => {
    return books
  },
  getBookUserEmail:(email) => {
    const bookVerify = books.find(book => book.email === email)
    return bookVerify
  },
  getBookTitle:(title) => {
    const book = books.find(book => book.title === title)
    return book
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
  },
  updateBook:(id, updateBook) => {
    const bookIndex = books.findIndex(book => book.id === id)
    if(bookIndex === -1){
      return null
    }

    books[bookIndex] = {...books[bookIndex], ...updateBook}
  },
  deleteBook: (id) => {
    const bookIndex = books.findIndex(book => book.id === id)

    if(bookIndex === -1){
      return null
    }

    const bookDeleted = books[bookIndex]
    books.splice(bookIndex,1)
    return(bookDeleted)
  }
}


module.exports = booksModels