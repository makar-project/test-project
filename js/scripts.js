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




//                                     Quest2
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    info() {
        return `Make: ${this.make} Year: ${this.year}`
    }
    age() {
        let currentYear = 2024;
        return `Возраст транспорта: ${currentYear - this.year} лет`
    }
}

class Truck extends Vehicle {
    constructor(make, year, payload) {
        super(make,year)
        this.payload = payload;
    }
    info() {
        let currentYear = 2024;
        return `Make: ${this.make}, Возраст транспорта: ${currentYear - this.year} лет, Грузоподъемность: ${this.payload}kg`
    }
}

const myVehicle = new Vehicle("Toyota", 2010);
console.log(myVehicle.info());
console.log(myVehicle.age());
const myTruck = new Truck("Volvo", 2015, 5000);
console.log(myTruck.info()); 
console.log(myTruck.age());







