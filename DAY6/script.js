'use strict';

//Immediately Invoked Function Expressions (IIFE)

//Normal Function
const runOnce = function () {
  console.log('How to run function oonly once');
};
runOnce();
//Solution
(function () {
  console.log('This function only runs once');
})();
//Rewrite using Arrow Syntax
(() => {
  console.log(
    'writing Immediately Invoked Function Expressions in arrow syntax '
  );
})();
{
  const isPrivate = 23;
}
//Not accesible
// console.log(isPrivate);

//Closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
//Examples
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
h();
f();
console.dir(f);
// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups with, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};
// const perGroup = 1000;
boardPassengers(180, 3);
