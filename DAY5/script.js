'use strict';
// Default Parameters

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //OLD WAY
  // numPassengers = numPassengers || 1;
  // price = price || 23;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  booking;
  bookings.push(booking);
};
createBooking('Air234', 5, 1234);
createBooking('neo123');
createBooking('INF123', 5);
createBooking('UFG456', undefined, '1234');

// How Passing Arguments Works: Value vs. Reference
const flight = 'IND123';
const x = {
  name: 'Sea Blue',
  passport: 12345678,
};
const checkIn = function (flightNumber, passenger) {
  flightNumber = 'asa123';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 12345678) {
    console.log(checkIn);
    // alert('checkIn');
  } else {
    console.log('wrong Passport');
    // alert('Wrong Passport');
  }
};
checkIn(flight, x);
// no change
console.log(flight);
// this will change because they both are same in meory heap
console.log(x);
//Eg
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random) * 100000;
};
newPassport(x);
checkIn(flight, x);

//Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFristWord = function (str) {
  const [frist, ...others] = str.split(' ');
  return [frist.toUpperCase(), ...others].join(' ');
};
//Higher order function
const transformer = function (str, fn) {
  console.log(`Orginal String:${str}`);
  console.log(`TransFormed String : ${fn(str)}`);

  console.log(`TRansformed by : ${fn.name}`);
};
transformer('JavaScript is Best!', upperFristWord);
transformer('Javascript is best', oneWord);
//
const high5 = function () {
  console.log('Hi');
};
// document.body.addEventListener('click', high5);
['x', 'seaBlue', 'Nama'].forEach(high5);

// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const geeter = greet('Hey');
geeter('Nam');
greet('Hello')('Sea');
// challenge rewrie in arrow functions
const greetArrow = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
const geeterO = greet('Hey');
geeterO('Nam');
greet('Hello')('Sea');

//The call and apply Methods
const indigo = {
  airline: 'indigo',
  ilatCode: 'IG',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.ilatCode}:${flightNum}`
    );
    this.bookings.push({ flight: `${this.ilatCode}${flightNum} ${name}` });
  },
};
indigo.book(234, 'SeaBlue');
indigo.book(345, 'nama');
console.log(indigo);

const airFly = {
  name: 'airFly',
  ilatCode: 'AF',
  bookings: [],
};
const book = indigo.book;
//Error
// book(23, 'nobi');
//Call Method uses to call this method to given value
book.call(airFly, 23, 'nobi');
console.log(airFly);
book.call(indigo, 34, 'suzu');
console.log(indigo);
const deccan = {
  name: 'deccan',
  ilatCode: 'DC',
  bookings: [],
};
book.call(deccan, 345, 'gwen');
console.log(deccan);
// Apply method
const flightData = [123, 'suneo'];
book.apply(deccan, flightData);
console.log(deccan);
book.call(deccan, ...flightData);

//BIND METHOD
const bookaF = book.bind(airFly);
const bookDC = book.bind(deccan);
bookaF(345, 'deki');
bookDC(123, 'namos');

const bookaf123 = book.bind(airFly, 123);
bookaf123('nani');
bookaf123('BAtMan');

//with Event Listeners

indigo.planes = 300;
indigo.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// indigo.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', indigo.buyPlane.bind(indigo));
// Partial application
const addTax = (rate, value) => {
  return value + value * rate;
};
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));
console.log(addVAT(23));
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVatTax = addTaxRate(0.23);
console.log(addTaxRate(0.1)(12));
console.log(addVatTax(12));

//Immediately Invoked Function Expressions
//NORMAL ONE
const runOnce = function () {
  console.log(`This will never run once again`);
};

runOnce();
//Immediately Invoked Function Expressions
(function () {
  console.log('hello this is a function');
})();
//Arrow function
(() => {
  console.log('hello Arrow');
})();
