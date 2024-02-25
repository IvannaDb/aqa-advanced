import Book from "./Book.js"
import EBook from "./EBook.js"

const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
const book2 = new Book('1984', 'George Orwell', 1949)
const book3 = new Book('Harry Potter and the Philosophers Stone', 'J.K. Rowling', 1997)

book1.printInfo()
book2.printInfo()
book3.printInfo()

const eBook1 = new EBook('The Catcher in the Rye', 'F. Scott Fitzgerald', 1925, 'MOBI')
eBook1.printInfo()

const book4 = new Book ()
book4.title = ""
book4.author = true
book4.year = 1.1

const eBook2 = new EBook ()
eBook2.title = ""
eBook2.author = true
eBook2.year = 1.1
eBook2.format = 1

const oldestBook = Book.findOldestBook([book1, book2, book3, eBook1])
console.log("The oldest book is:")
oldestBook.printInfo()

const eBookFromBook = EBook.createEBookFromBook(book1, '.PDF')
console.log("EBook created from Book:")
eBookFromBook.printInfo()