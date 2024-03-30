// Book
class book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} написана в ${this.year} году, автором ${this.author}`
    }
}
const silverAge = new book('Серебрянный век', 'Блок А.А', 1990)
console.log(silverAge.getSummary())


// Library
class library {
    constructor() {
        this.books = []
    }
    addbook(book) {
        this.books.push(book)
    }
    showBooks() {
        return this.books
    }
    getSummary(i) {
        return this.books[i]
    }
}
const libs = new library()
libs.addbook('"Серебрянный век", Блок А.А, 1990')
libs.addbook('"Гарри Поттер", "Дж. К. Роулинг", 1997')
console.log(libs.showBooks())
console.log(libs.getSummary(1))

