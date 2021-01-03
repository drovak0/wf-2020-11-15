// Javascript Fundamentals

// ECMA Script
// maintains the current up-to-date standardization of JavaScript

// Debugging

// Scope
// Global vs Local
// var, const, let
// var global
// const block - cannot re-assign value
// let block - can re-assign value

// Hoisting
// refactoring the code at runtime

// Destructuring
// const person = {
//   firstName: "Bob",
//   lastName: "Marley",
//   email: "bob@marley.com",
//   password: "sekureP@ssw0rd9",
//   username: "barley",
//   createdAt: 1543945177623,
// }
// const animals = ["horse", "dog", "fish", "cat", "bird"]

// BEFORE ES6
// var email = person.email;
// var firstName = person.firstName;
// var lastName = person.lastName;
// var firstAnimal = animals[0];

// AFTER ES6
// const { email, firstName, lastName } = person;
// const [firstAnimal, secondAnimal] = animals;

// console.log(email);
// console.log(firstName)
// console.log(lastName)
// // => bob@marley.com
// console.log(firstAnimal);
// console.log(secondAnimal);
// => horse

// Rest / Spread
// const animals = ["horse", "dog", "fish", "cat", "bird"]
// const moreAnimals = ['rabbit', 'turtles', 'frog']

// const allAnimals = [...animals, ...moreAnimals]
// console.log(allAnimals)

// const person = {
//   firstName: "Bob",
//   lastName: "Marley",
//   email: "bob@marley.com",
//   password: "sekureP@ssw0rd9",
//   username: "barley",
//   addresses: [
//     {
//       address: "1600 Pennsylvania Avenue",
//       city: "Washington, D.C.",
//       zipcode: "20500",
//     },
//     {
//       address: "221B Baker St.",
//       city: "London",
//       zipcode: "WC2N 5DU",
//     },
//   ],
//   createdAt: 1543945177623,
// }

// const { firstName, lastName, ...attributes } = person

// console.log(attributes)

// Arrow functions

// var sayHello = function (name) {
//   console.log("Hello " + name)
// }

// const sayHello = (name) => {
//   console.log(`Hello ${name}`)
// }

// Ternary Operators

// var age = 20

// if (age < 100) {
//   // do this
//   console.log("you're still young!")
// } else {
//   // do that
//   console.log('you will live forever')
// }

// testCase ? "what to do when true" : "what to do when false"

// age < 100
//   ? console.log("you're still young!")
//   : console.log("you will live forever")