'use strict';

// object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(fristName, birthYear) {
//     this.fristName = fristName;
//     this.birthYear = birthYear;
//   },
// };

// const x = Object.create(PersonProto);
// console.log(x);
// x.name = 'Hello';
// x.birthYear = 2000;
// x.calcAge();
// console.log(x.__proto__ === PersonProto);

// const y = Object.create(PersonProto);
// y.init('Here', 1999);
// y.calcAge();

// // EXERCISE
// // class Car {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }
// //   accelrate() {
// //     this.speed += 10;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }
// //   brake() {
// //     this.speed -= 5;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }

// //   get speedUs() {
// //     return this.speed / 1.6;
// //   }
// //   set speedUs(speed) {
// //     this.speed = speed * 1.6;
// //   }
// // }

// // const ford = new Car('Ford', 120);
// // console.log(ford.speedUs);
// // ford.accelrate();
// // ford.accelrate();

// // ford.brake();
// // ford.speedUs = 50;
// // console.log(ford);
// //////////////////////////////////////////////////////////

// // Inheritance Between "Classes": Constructor Functions
// // Parent class
// const Person = function (fristName, birthYear) {
//   this.fristName = fristName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (fristName, birthYear, course) {
//   // this.fristName = fristName;
//   // this.birthYear = birthYear;
//   Person.call(this, fristName, birthYear);
//   this.course = course;
// };
// // LINKING PROTOTYPES
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`Hello my name is ${this.fristName} and studying ${this.course}`);
// };
// const adam = new Student('Adam', 2000, 'CS');
// console.log(adam);
// adam.introduce();
// adam.calcAge();
// console.log(adam.__proto__);
// console.log(adam.__proto__.__proto__);
// console.log(adam instanceof Person);
// ///////************ */
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// // EXERCISE
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// //LINKING the prototype
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// // here car also have the function accelerate but javascript uses the frist one
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
//   );
// };
// const tesla = new EV('Tesla', 120, 87);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.brake();

// Inheritance Between "Classes": ES6 Classes
//extends super
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // always needs to hapeen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   // it overrides the parent class calcAge function
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }
// const alex = new Student('Alex Nama', 2001, 'CE');
// console.log(alex);
// alex.introduce();
// alex.calcAge();

// // Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (fristName, birthYear, course) {
//   PersonProto.init.call(this, fristName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 1999, 'ECE');
// jay.introduce();
// jay.calcAge();

/////////////////////////////////////////////////////////////////////

// Encapsulation: Protected Properties, Private Class Fields and Methods
//public fields
//private feilds
//public methods
//priate methods
// static version
class Account {
  //public fields
  locale = navigator.language;
  // private feilds
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    this.#movements = [];
    this.locale = navigator.language;
    console.log('Thank you for opening account');
  }
  // public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
      return this;
    }
  }
  //Private Methods - stll not accept
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(' I an Here');
  }
}

const acc1 = new Account('Nami', 'INR', 1234);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-123);
acc1.deposit(250);
acc1.withdraw(100);
console.log(acc1);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
// console.log(acc1.#movements);

Account.helper();

// Chaining Methods
// return this;
acc1.deposit(300).deposit(500).withdraw(34).requestLoan(23000);
console.log(acc1.getMovements());

//Exercise

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
