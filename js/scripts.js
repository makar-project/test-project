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

let hobbiesOfAlice = {
    "Алиса": ["рисование", "плавание", "чтение"],
    "Боб": ["бег", "чтение", "шахматы"]
};

let hobbiesOfTom = {
    "Том": ["рисование", "шахматы", "гитара"],
    "Джейн": ["плавание", "бег", "гитара"]
};

let groupOfHobbies = [];
function findCommonHobbies (object1, object2) {
    hobbiesOfAlice["Алиса"].forEach(function(item, index, array) {
        groupOfHobbies.push(item);
    })
    hobbiesOfAlice["Боб"].forEach(function(item,index,array){
        groupOfHobbies.push(item);
    })
    hobbiesOfTom["Том"].forEach(function(item, index, array){
        groupOfHobbies.push(item)
    })
    hobbiesOfTom["Джейн"].forEach(function(item, index, array){
        groupOfHobbies.push(item)
    })
}
findCommonHobbies()
console.log(groupOfHobbies)