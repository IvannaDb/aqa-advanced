import Book from "./Book.js"
export default class EBook extends Book {
    constructor (title, author, year, format) {
       super (title, author, year)
       this._format = format
    }
    get format() {
        return this._format
    }
    set format(value) {
        if (typeof value !== 'string') {
            console.error("Error: Author should be type of string")
            return
        }
        this._format = value
    }
    printInfo() {
        super.printInfo()
        console.log(`File format: ${this._format}`)
    }
    static createEBookFromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}
