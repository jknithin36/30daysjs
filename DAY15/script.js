'use strict';

// object.create

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(fristName, birthYear) {
    this.fristName = fristName;
    this.birthYear = birthYear;
  },
};

const x = Object.create(PersonProto);
console.log(x);
x.name = 'Hello';
x.birthYear = 2000;
x.calcAge();
console.log(x.__proto__ === PersonProto);

const y = Object.create(PersonProto);
y.init('Here', 1999);
y.calcAge();

// EXERCISE
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelrate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUs);
ford.accelrate();
ford.accelrate();

ford.brake();
ford.speedUs = 50;
console.log(ford);
//////////////////////////////////////////////////////////

// Inheritance Between "Classes": Constructor Functions

// Parent class
