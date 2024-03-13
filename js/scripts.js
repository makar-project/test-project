// Задача 1
let monthlyExpenses = {
    "Продукты": 15000,
    "Коммунальные услуги": 5000,
    "Развлечения": 8000,
    "Транспорт": 4000,
}

let resultExpenses = 0;

function calculateExpenses () {
    let i = 0 ;
    let values = Object.values(monthlyExpenses)
    while (i < Object.keys(monthlyExpenses).length) {
        resultExpenses += values[i] * 12
        i++
    }
}
calculateExpenses()
console.log(resultExpenses)




// Задача 2