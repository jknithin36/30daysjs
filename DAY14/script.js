'use strict';

// Constructor Functions and the new Operator

// constructor functions are not really a feature of javascript language, instead, they are simply a pattern that has been developed by other developers, but for conevntion all are using them

// constructor functions should be in Capital letter for reference

const Person = function (fristName, birthYear) {
  // console.log(this);
  this.fristName = fristName;
  this.birthYear = birthYear;
  // functions
  // we should create functions here, because it will create performance issue, insted of thiswe can use prototypes -- line 37
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const x = new Person('X', '2001');
console.log(x);

// when we call constructor funcction 4 steps happen behind scenes
//1 . new {} is created
//2 . function is callled, this = {}
//3 . {} linked to prototype
//4 . function automatically return {}
const y = new Person('y', '1999');
const z = new Person('Z', '2000');
console.log(y, z);
const l = 'na';

// here x , y z are instances of Person(Constructor Function)
console.log(x instanceof Person);
console.log(l instanceof Person);

//Prototypes

// each and every function in javascript automatically have a property called prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

x.calcAge();
y.calcAge();
z.calcAge();
console.log(x.__proto__);
console.log(x.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(x));
console.log(Person.prototype.isPrototypeOf(Person));
/////////////////////////////////////////////////////////////////////////

Person.prototype.species = 'Homo Sapiens';
console.log(x, y, z);

// own properties are the only that are decalred directly on object itself, not on inherit properties

console.log(x.hasOwnProperty('fristName'));
console.log(x.hasOwnProperty('species'));

console.log(x.__proto__);
// instance prototype
console.log(x.__proto__.__proto__);
// object prototype
console.log(x.__proto__.__proto__.__proto__);
// null because object type prototype is the top
console.dir(Person.prototype.constructor);

// Prototypal Inheritance on Built-In Objects

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7];
console.log(arr.__proto__);
// shows all arrays built-in Methods

console.log(arr.__proto__ === Array.prototype);
// true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
// all DOM Element are objects behind the scenes

// EXERCISE
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};
const bmw = new Car('BMW', 120);
const tesla = new Car('telsa', 100);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

///////////////////////////////////////////////////////////////

// ES6 Classes

// class expression
// const personCl = class{}

// class declaration
// 1. classes are not hoisted like functions
// 2. just like functions classes are frist-class citizens
// 3. classes are executed in strict mode

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // it will in .prototype property
  // instance methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fristName} `);
  }
  get age() {
    return 2023 - this.birthYear;
  }
  // set a property that already exists
  set fullName(name) {
    console.log(name);
    name.includes(' ')
      ? (this._fullName = name)
      : alert(`${name} is not a full name`);
  }
  // to access _fullname
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey = function () {
    console.log('Hey ...............');
    console.log(this);
  };
}

const a = new PersonCl('A B', '2006');
console.log(a);
a.calcAge();
console.log(a.__proto__ === PersonCl.prototype);
console.log(a.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fristName} `);
// };

a.greet();

const w = new PersonCl('z j', 1999);

// Setters and Getters

const account = {
  owner: 'x',
  movements: [200, 300, 120, 329],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// Static Methods
Person.hey = function () {
  console.log('Hey ...............');
  console.log(this);
};

// Person.hey();
PersonCl.hey();
