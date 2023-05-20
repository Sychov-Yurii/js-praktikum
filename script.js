/*
 * Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.
//  */

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// function copyArr(clients) {
//     // return clients.slice()
//     return [... clients]
// }
// const copyClients = copyArr(clients)

// console.log(copyClients)
// console.log(copyClients === clients)

//Опис завдання: Напишіть функцію, яка повертає новий об'єкт без зазначених значень.
// Очікуваний результат: ({ a: 1, b: 2, c: 3 }, 'b', 'c') => { a: 1 }

const data = { a: 1, b: 2, c: 3 };
function without (obj, ...args) {
    const newObj = {... obj}
    for (const key of args) {
        delete newObj[key];
    } 
    return newObj;
}


console.log(without(data, 'b', 'c')); // { a: 1 }
