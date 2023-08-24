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

// const leftInputEl = document.querySelector("#leftSwapInput");
// const rightInputEl = document.querySelector("#rightSwapInput");
// const swapBtnEl = document.querySelector("#swapButton");

// swapBtnEl.addEventListener("click", inputChanger);

// function inputChanger() {
//   const change = leftInputEl.value;
//   leftInputEl.value = rightInputEl.value;
//   rightInputEl.value = change;
// }

// function inputChanger() {
//   [leftInputEl.value, rightInputEl.value] = [
//     rightInputEl.value,
//     leftInputEl.value,
//   ];
// }

/*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>

*/

// const passwordInputEl = document.querySelector('#passwordInput');
// const passwordButtonEl = document.querySelector('passwordButton');

// passwordButtonEl.addEventListener('click', onClick)

// function onClick () {
//     if(passwordInputEl.type === 'password') {
//         passwordInputEl.type = 'text'
//         passwordButtonEl.textContent = 'Приховати'
//     } else {
//         passwordInputEl.type = 'password'
//         passwordButtonEl.textContent = 'Розкрити'
//     }
// }
  
// const passwordInputEl = document.querySelector('#passwordInput');
// const passwordButtonEl = document.querySelector('passwordButton');

// passwordButtonEl.addEventListener('click', onClick)

// function onClick (event) {
//     const bool = passwordInputEl.type === 'password';
//     passwordInputEl.type = bool ? 'text' : 'password'
//     //event.target 
//     console.log(event.target)
//     console.log(event.currentTarget)
// }




// //Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
// //фрагмент розмітки:
// {
//     /* <div class="item"> 
//   <h3>Заголовок</h3>
//   <p>текст текст текст</p>
//   </div> */
//   }
//   {
//     /* <button class="add-btn">add</button>
//     <div class="container"></div> */
//   }

// const btnEl = document.querySelector('.add-btn');
// const containerEl = document.querySelector('.container');

// btnEl.addEventListener('click', onClick);
//  function onClick() {
//     const divEl = document.createElement('div');
//     const titleEl = document.createElement('h3');
//     const textEl = document.createElement('p');
//     divEl.classList.add('item');
//     titleEl.textContent = 'Заголовок';
//     textEl.textContent = 'Lorem Ipsum';
//     divEl.append(titleEl, textEl);
//     containerEl.append(divEl);
//  }

// function onClick() {
//     const markup = `<div class="item"> 
//     <h3>Заголовок</h3>
//     <p>текст текст текст</p>
//     </div>`
//     containerEl.innerHTML = markup;
// } 



/*
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

<style>
#box {
    width: 30px;
    height: 30px;
    background: red;
}
</style>

    <div>
        <div id="box"></div>
        <button id="decrease">Зменшити</button>
        <button id="increase">Збільшити</button>
    </div>
*/

// const boxEl = document.querySelector('#box');
// const decreaseEl = document.querySelector('#decrease');
// const increaseEl = document.querySelector('#increase');

// let size = boxEl.clientWidth;

// decreaseEl.addEventListener('click', () => {
//     size -= 10;
//     updateBoxEl();
// });
// increaseEl.addEventListener('click', () => {
//     size += 10;
//     updateBoxEl();
// });

// function updateBoxEl () {
//     boxEl.style.width = size + 'px';
//     boxEl.style.height = size + 'px'
// }

// console.dir(boxEl)

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   let totalPrice = (pricePerDroid*orderedQuantity) - customerCredits;
//   let userTotal = 
  
//     // Change code above this line
//     if (customerCredits > pricePerDroid) {
//       message = "Insufficient funds!";
  
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`
//     }
//     return message;
//   }


  // function checkStorage(available, ordered) {
  //   let message;
  //   // Change code below this line
  // if (ordered = 0) {
  //   message = "There are no products in the order!"
  // };
  //   else if (ordered > available) {
  //     message = "Your order is too large, there are not enough items in stock!"
  //   };
  //   else {
  //     message = "The order is accepted, our manager will contact you"
  //   };
  //   // Change code above this line
  //   return message;
  // }
  

//   const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);



// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

function getShippingCost(country) {
    let message;
    // Change code below this line
  switch (country) {
  
    case China :
      message = `Shipping to ${country} will cost 100 credits`;
      break;
  
    case Chile :
      message = `Shipping to ${country} will cost 250 credits`;
      break;
  
    case Australia :
      message = `Shipping to ${country} will cost 170 credits`; 
      break;
      
    case Jamaica :
      message = `Shipping to ${country} will cost 120 credits`;
      break;
      
      default : 
      message = "Sorry, there is no delivery to your country"
  
      
  }
    // Change code above this line
    return message;

  }
  


// (function (x) {
//     delete x;
//     return x;
//   })(100)
