// OOP

// Classes
// - `Class` keyword in js is "syntactical sugar"
// - at our level, we can work with js classes in more or less the same way as we do in other languages, but there are some differences
class Foo {}
typeof Foo;
// - "In JavaScript, class inheritance is implemented on top of prototypal inheritance" - Eric Elliot

// Prototype
// - Prototype: "a first, typical or preliminary model of something, especially a machine, from which other forms are developed or copied."
// - JS is a prototype based language, different from languages with classical inheritance (like C# and Java)
// - Prototypal Inheritance: A prototype is a WORKING object instance. Objects inherit directly from other objects.
//   - working object instance refers to the fact that it is not a blueprint like a class, it is an actual working instance already, unlike a class which is not an instance itself, because it is a blueprint used to create instances.
//   - proof the prototype is a working object:
//     - `Array.prototype.push('this i`s a working prototype');`
//     - `Array.prototype[0]`

// Inheritance & Super
// parent Vehicle class
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}

// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
const m5 = new M5("Blue");
// m5.childFunction();
// console.log(m5.miles)
// m5.drive()
// console.log(m5.miles)

// Examples

// Human
class Human {
  constructor(name) {
    this.name = name
    this.hitPoints = 100
  }
  sayMyName() {
    console.log(`I am ${this.name}!`)
  }
  displayHealth(){
    console.log(`${this.name}: ${this.hitPoints}`)
  }
}

// Profession - barbarian, wizard, archery, werewolf, vampire, paladin, scholar
class Barbarian extends Human {
  constructor(name) {
    super(name);
  }
  // overide
  sayMyName() {
    console.log(`I am ${this.name}! Roaaar!`);
  }
  battleShout() {
    console.log(`Argggg!`);
    this.hitPoints += 10;
  }
  attack(target){
    target.hitPoints -= 10;
    console.log(`${target.name} took 10 damage!`);
    target.displayHealth();
  }
}

var a250 = new Human("a250")
a250.sayMyName()
var conan = new Barbarian('Conan')
conan.sayMyName()
conan.attack(a250)
conan.displayHealth()