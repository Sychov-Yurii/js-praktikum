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

// const data = { a: 1, b: 2, c: 3 };
// function without (obj, ...args) {
//     const newObj = {... obj}
//     for (const key of args) {
//         delete newObj[key];
//     } 
//     return newObj;
// }


// // console.log(without(data, 'b', 'c')); // { a: 1 }


// генератор чисел
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 9;
// let totalSalary = 0;
// // for (let i = 1; i <= employees; i += 1) {
// //     console.log(`Barzahlen für tellnemen ist ${i} - `)
// // }

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round (
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`Barzahlen für tellnemen ist ${i} - ${salary}`)
//  totalSalary += salary;
//  console.log('totalSalary: ', totalSalary)   
// }

// найти парное число
// newFunction();
// function newFunction() {
//     const min = 4;
//     const max = 10;
//     let total = 0;

//     for (let i = min; i <= max; i += 1) {
//         // console.log(i);
//         if (i % 2 !== 0) {
//             console.log('Ni paars:', i);
//             continue;

//         }
//         console.log('Paars: ', i);
//         total += i;
//     }
//     console.log('Total: ', total);
// }


// let balance = 20000;
// const payment = 2060;

// console.log(`Summa ${payment} bar. Check bargeld`)

// if (balance >= payment) {
//     console.log('ok')

//     balance -= payment;
//     console.log(`You balance is ${balance} credits`) 
// } else {
//     console.log(`Your cash is not`)
// }
// console.log(`Transaction END`)

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const add = function (...args) {
//     console.log(args);
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));


// const user = {
// //     name: `Test User`,
// //     getName() {
// //         console.log(user.name)
// //     }
// // }

// // const admin = {
// //     name: `Test admin`
// // }

// // console.log(this)
// // console.log(name)

// function getName() {
//     console.log(this.city);
// }

// getName()

// const user = {
//     name: `User`,
//     city: `Lviv`,
//     getThis() {
//         console.log(this)
//     }
// }

// user.getThis()
// const admin = {
//     name: `Admin`,
//     city: `Odessa`,
//     getThis: () => {
//         console.log(this)
//     }
// }

// admin.getThis

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     { title: "Beside Still Waters", author: "Robert Sheckley" },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
//     { title: "Redder Than Blood", author: "Tanith Lee" },
//     { title: "Enemy of God", author: "Bernard Cornwell" }
//   ];
  
//   const titles = books.map(book => book.title);
  
//   const books = [ 
//     book1: { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     book2: { title: "Beside Still Waters", author: "Robert Sheckley" },
//     book3: { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
//     book4: { title: "Redder Than Blood", author: "Tanith Lee" },
//     book5: { title: "Enemy of God", author: "Bernard Cornwell" }
//   ];
  
//   const titles = Object.values(books).map(book => book.title);
  
// const books = [
// ];

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     }, 
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment)
// updateCounter(5, counter.decrement);

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order this.pizzaName {
//       const isPizzaAvailable = this.pizzaName;
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };
  