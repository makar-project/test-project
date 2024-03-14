//* Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа из исходного массива. Используйте Set для решения этой задачи.


function uniqueNumbers(numbers) {
    let uniqueNumbers = [...new Set(numbers)]
    return uniqueNumbers
  }
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueNumbers(numbers)); // [1, 2, 3, 4, 5]



//* Предположим, у вас есть два массива, представляющие два разных набора данных (например, список имен). Необходимо написать функцию, которая возвращает массив, содержащий только те элементы, которые присутствуют в обоих массивах (пересечение массивов). Используйте Set для решения этой задачи.
function findCommonElements(arr1, arr2) {
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)
  let commonElements;
  commonElements = new Set([...set1].filter(function(element){
    return set2.has(element)
  }));
  return [...commonElements]
}

const array1 = ['Alice', 'Bob', 'Charlie', 'Diana'];
const array2 = ['Bob', 'Diana', 'Eve', 'Alice'];
console.log(findCommonElements(array1, array2)); 


//!   spread operator
//!  Array.from