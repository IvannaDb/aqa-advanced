export default class Book {
    constructor (title, author, year) {
        this._title = title,
        this._author = author,
        this._year = year
    }
    get title (){
        return this._title
    }
    set title(value) {
        if (typeof value !== 'string' || value.length < 1) {
            console.error("Error: Title should be a non-empty string")
            return
        }
        this._title = value
    }

    get author (){
        return this._author
    }
    set author (value) {
        if(typeof value !== "string"){
            console.error("Error: Author should be type of string")
            return
        }
        this._author = value
    }
    get year (){
        return this._year
    }
    set year(value) {
        if (typeof value !== 'number' || !Number.isInteger(value)) {
            console.error("Error: Year should be a valid integer number")
            return
        }
        this._year = value
    }
    printInfo() {
        console.log(`Name of book: ${this._title}, Author: ${this._author}, Year: ${this._year}`)
    }
    static findOldestBook(books) {
        return books.reduce(function(oldestBook, currentBook) {
            return currentBook.year < oldestBook.year ? currentBook : oldestBook;
        }, books[0]);
    }
    }
    

