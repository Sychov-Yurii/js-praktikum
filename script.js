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

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//   switch (country) {
  
//     case China :
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
  
//     case Chile :
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
  
//     case Australia :
//       message = `Shipping to ${country} will cost 170 credits`; 
//       break;
      
//     case Jamaica :
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
      
//       default : 
//       message = "Sorry, there is no delivery to your country"
  
      
//   }
//     // Change code above this line
//     return message;

//   }
  


// (function (x) {
//     delete x;
//     return x;
//   })(100)

// const mySet = new Set([1, 2, 1, 4, 3, 2]);
// const result = [...mySet];
// console.log(result);




// const person = { name: 'Mango' };

// function sayHi(age) {
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));


//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = (callback) => {
    
//     const userName = prompt("enter your name") 
//     if (!userName) {
//         return;
//     } 
//     callback(userName);   

// }
// const greet = (name) => {
//     console.log(`Привіт ${name}`);
// } 



// letMeSeeYourName(greet) 



// const object = {
//     message: "Hello world",
//     getMessage() {
//         const message = "Hello, Earth";
//         return this.message;
//     }, 
// };
// console.log(object.getMessage());






// const vehicles = [
//     { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//     { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//     { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//     { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//     { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//     { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//     { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//     { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//     { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//     { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
//   ];

//   class CarsManager {
//     #cars;
//     constructor(cars=[]) {
//         this.#cars = cars;
//     }
//     get cars() {
//         console.log(vehicles === this.#cars);
//         return this.#cars;
//     }

//     getModels() {
//         return this.#cars.map((car)=>{
//             return car.model;
//         })
//     }

//     getTotalPrice() {
//         return this.#cars.reduce((acc, car) => {
//             return acc + car.price;
//         },0)
//     }
 
//   }
//   const carsManager = new CarsManager(vehicles);
//   console.log(carsManager.cars);
//   console.log(carsManager.getModels());
//   console.log(carsManager.getTotalPrice());

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this._email;
//     }
  
//     /**
//      * @param {any} newEmail
//      */
//     set email(newEmail) {
//         this._email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
//     construktor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     } 
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  






// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);





// Задача 111
// <div>
//       <p class="taskTitle">ЗАДАЧА 1</p>
//       <button id="alertButton">SHOW ME</button>
//       <input id="alertInput" type="text" />
//     </div>
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

// const refs = {
//     outputText: document.querySelector('#outputText'),
//     alertButton: document.querySelector('#alertButton'),
//     alertInput: document.querySelector('#alertInput'),
// };

// refs.alertButton.addEventListener('click', onAlertButtonClick);
// function onAlertButtonClick(evt) {
//     console.log(evt);
//     refs.outputText.textContent = refs.alertInput.value;
// }


// <div>
//       <p class="taskTitle">ЗАДАЧА 2</p>
//       <button id="swapButton">SWAP ME</button>
//       <input id="leftSwapInput" type="text" value="???" />
//       <input id="rightSwapInput" type="text" value="!!!" />
//     </div>
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const refs = {
//     leftSwapInput: document.querySelector('#leftSwapInput'),
//     rightSwapInput: document.querySelector('#rightSwapInput'),
//     swapButton: document.querySelector('#swapButton'),
// };

// refs.swapButton.addEventListener('click', onSwapButtonClick);

// function onSwapButtonClick(evt) {
//     const leftSwapInputValue = refs.leftSwapInput.value;
//     const rightSwapInputValue = refs.rightSwapInput.value;

//     refs.leftSwapInput.value = rightSwapInputValue;
//     refs.rightSwapInput.value = leftSwapInputValue;
// }



//  <div>
// <p class="taskTitle">ЗАДАЧА 113</p>
// <input id="passwordInput" type="text" />
// <button id="passwordButton">Приховати</button>
// </div>

// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду. 

// const refs = {
//     taskTitle: document.querySelector('.taskTitle'),
//     passwordInput: document.querySelector('#passwordInput'),
//     passwordButton: document.querySelector('#passwordButton'),
// };

// refs.passwordButton.addEventListener('click', onPasswordButtonClick);

// function onPasswordButtonClick (evt) {

//     if (evt.currentTarget.textContent === "Розкрити") {
//         refs.taskTitle.style.display = "block";
//         refs.passwordButton.textContent = "Приховати";
//         return;
//     }

//     refs.taskTitle.style.display = "none";
//     refs.passwordButton.textContent = "Розкрити";

// };

const elements = {
    form: document.querySelector('.js-search'),
    formContainer: document.querySelector('.js-form-container'),
    list: document.querySelector('.js-list'),
    addField: document.querySelector('')
}

