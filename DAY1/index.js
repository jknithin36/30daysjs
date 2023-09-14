"use strict";

// DAY -1

// Question Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//SOLUTION

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

createHelloWorld()();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Destructuring Arrays

const student = {
  name: "X",
  location: "Earth",
  subjects: [
    "Web Development",
    "Mobile Application Development",
    "Design Tools",
  ],

  frameWorks: ["React", "React Native", "flutter", "express"],
  others: ["git", "figma", "node", "Tailwind"],

  learn: function (indexOne, indextwo) {
    return [this.frameWorks[indexOne], this.others[indextwo]];
  },
};

// EXAMPLE
const arr = [1, 2, 3];

const [a, b, c] = arr;

console.log(a, b, c);

const [one, two, three, four] = student.frameWorks;

console.log(one, two, three, four);

// Skip elements

let [primary, , secondary] = student.frameWorks;

console.log(primary, secondary);

// Swap elements

[secondary, primary] = [primary, secondary];

console.log(primary, secondary);

// Return Values From Functions
const [subOne, subTwo] = student.learn(1, 3);
console.log(subOne, subTwo);

// Nested Array

const nested = [2, 3, [4, 5]];

const [x, , y] = nested;
console.log(x, y);

//  Destructuring inside  Destructuring
const [j, , [k, n]] = nested;
console.log(j, k, n);

// Default Values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
