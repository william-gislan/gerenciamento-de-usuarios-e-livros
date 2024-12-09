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
  }

}


module.exports = booksController