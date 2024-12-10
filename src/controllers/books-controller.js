const books = require("../data/books")
const { user } = require("../data/books")
const booksModels = require("../models/books-models")



const booksController = {
  createBook: (req, res) => {
    const { title,  author, copies } = req.body
    const email = req.user?.email

    if(typeof title !== 'string' || typeof author !== 'string'){
      res.status(400).json({message:'Data Incompleted'})
    }
    const bookVerify = booksModels.getBookTitle(title)

    if(bookVerify){
      res.status(400).json({message:'Book already exists'})
    }
   
    const newBook = booksModels.createBook(title, author, email, copies)
    res.status(201).json(newBook)
  },
  getBookEmail:(req, res) => {
    const email = req.user?.email

    const book = booksModels.getBookUserEmail(email)

    res.status(200).json(book)
  },
  updateBook:(req, res) => {
    const email = req.user?.email
    const { id } = req.params
    const { title, author } = req.body

    const bookIndex = books.findIndex(book => book.id === id)

    if(books[bookIndex].email !== email){
      res.status(400).json({message:'you are not allowed to change this book'})
    }

    const updateDate = {}
    if(title) updateDate.title = title
    if(author) updateDate.author = author

    const updateBook = booksModels.updateBook(id, updateDate)
    res.status(201).json({message:'data updated successfully'})
  }
}


module.exports = booksController