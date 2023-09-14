"use strict";

// DAY - 2

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//SOLUTION

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

//   const counter = createCounter(10)
//   counter() // 10
//   counter() // 11
//   counter() // 12

//  Destructuring Objects

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

  classTimings: {
    mon: {
      start: 12,
      end: 18,
    },
    thu: {
      start: 9,
      end: 12,
    },
    sat: {
      start: 7,
      end: 15,
    },
  },

  learn: function (indexOne, indextwo) {
    return [this.frameWorks[indexOne], this.others[indextwo]];
  },

  // we got one object from clinet but here we are destructuring Object
  addSubject: function ({ course, semester, credits = 0 }) {
    console.log(
      `You Have Taken ${course} of (${credits} credits) in ${semester} semester`
    );
  },

  learnFullStack: function (sub1, sub2, sub3) {
    console.log(`Learn ${sub1} , ${sub2} & ${sub3}`);
  },

  learnDesign: function (mainTool, ...othersTools) {
    console.log(mainTool);
    console.log(othersTools);
  },
};

student.addSubject({
  course: "DSA",
  semester: "Spring",
  credits: 4,
});
student.addSubject({
  course: "DSA",
  semester: "Spring",
});

// Variable Name Should be same as in Object

const { name, classTimings, subjects } = student;
console.log(name, classTimings, subjects);

// Variable names Should be different from object names

const {
  name: studentName,
  classTimings: studentTimings,
  subjects: studentSubjects,
} = student;
console.log(studentName, studentTimings, studentSubjects);

// Default Values

const { sports = [], subjects: subs = [] } = student;
console.log(sports, subs);

// Mutating Variables

let a = 111;
let b = 222;
const obj = { a: 11, b: 22, c: 23 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects

const {
  mon: { start, end },
} = classTimings;
console.log(start, end);

// ... SPREAD Operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);
console.log(...newArr);
const newOthers = [...student.others, "Next-js"];
console.log(newOthers);
// Copy Array
const mainOthersCopy = [...student.others];
// Join Two Arrays
const all = [...student.frameWorks, ...student.others];
console.log(all);
// spread Operator On String
const str = "Water";
const letters = [...str, "", "O"];
console.log(letters);
console.log(...str);
// Functions
// const data = [
//   prompt("Let's Learn Full Stack! Subject 1"),
//   prompt("Let's Learn Full Stack! Subject 2"),
//   prompt("Let's Learn Full Stack! Subject 3"),
// ];
// student.learnFullStack(...data);
// On Objects
const updateStudent = { ...student, year: 2023 };
console.log(updateStudent);

const studentCopy = { ...student };
studentCopy.name = "Water";
console.log(studentCopy.name);
console.log(student.name);

// REST Pattern(Left Side Of Assignment Operator)
// collects the elements that are unsed in destructuring
const [q, w, ...others] = [1, 2, 3, 4, 5];
console.log(q, w, others);
const allO = [...student.others, ...student.frameWorks];
console.log(allO);
const [git, , node, ...othersO] = [...student.others, ...student.frameWorks];
console.log(git, node, ...othersO);
//OBJECTS
const { sat, ...weekdays } = student.classTimings;
console.log(weekdays);
//Functions
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};
add(2, 3);
add(1, 2, 3);
const x = [23, 4, 5];
add(...x);
student.learnDesign("figma", "canva", "Abode");
student.learnDesign("FIGMA");

//NOTE
// REST FOR VARIABLES
// Spread for values Seperated By Commas
