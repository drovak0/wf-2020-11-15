console.log("does this work?")

// objects
var object = {
  // organize
  // key: value,
}
var userName = "Chris"
var userAge = 100
var userHairColor = "Black"

var chris = [userName, userAge, userHairColor]
// console.log("chris[0]: ", chris[0])

var person1 = {
  name: "Something",
  age: 100,
  hairColor: "Black",
  sayHi: function () {
    console.log(`Hello my name is ${this.name}, I am ${this.age} years old!`)
    console.log(this)
  },
}

var person2 = {
  name: "Something",
  age: 100,
  hairColor: "Black",
  sayHi: function () {
    console.log(`Hello my name is ${this.name}, I am ${this.age} years old!`)
    console.log(this)
  },
}

// console.log(`person1: `, person1)
// console.log(`person1.name: `, person1.name)
// console.log(`person1['name']: `, person1["name"])
// person1.sayHi()

// classes
// a blueprint for some classification

// student
class Student {
  // what is called when the class is initialize/born
  constructor(fn, ln) {
    // initialize the class instance
    this.fName = fn
    this.lName = ln
    console.log("Created a student!")
    // return this
  }
  // methods
  sayHi() {
    console.log(`Hello my name is ${this.fName}!`)
    console.log(this)
  }
}

// var student1 = new Student("Alreem", "A")
// console.log(student1)
// console.log(student1.sayHi())

// passing by value vs reference

// primitive types are passed by value
var text1 = "something"
var text2 = text1
console.log(text1 == text2)
// objects, arrays are passed by reference

var student1 = {
  name: "Sara",
}

var student2 = {
  name: "Sara",
}

console.log(student1 == student2)

// array of objects
var arr1 = [0, 1, 2, 3]
var arr2 = [0, 1, 2, 3]

console.log(arr1 == arr2)

// DOM Document Object Model
