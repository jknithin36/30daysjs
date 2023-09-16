"use strict";

// BIG O Notation
// To analyse the performance of an algorithm, we use Big O Notation.

// BigO Notation will give us a high level understanding of the time or space complexity of algorithms.

// BigO Notation doesn't care about precision, only about general trends(Linear , Quadratic, constant).

// The Time & Space Complexity depends only on the algorithm, not the hardware used to run the algorithm.

// Short Circuiting (&& and ||)
// We can also use Logical Operators:(Not only for Booleans)
//1 Use Any DataType
//2 Return Any DataType
//3 Short-circuting
//  || OR:  = if the frist value is truthy then it returns the        fristvalue without considering the other values
console.log("z" || 5);
console.log("" || 23);
console.log(undefined || null);
console.log(true || 23);
console.log(undefined || null || "Hello" || 23);
//Eg
const guests = 0;
const available = guests ? guests : 19;
console.log(available);
// Using Short Circuting
const available2 = guests || 10;
console.log(available2);

// && AND = searches the frist falsy value and returns it wirhout evaluating other values
console.log(0 && "x");
console.log(7 && "X");
console.log(23 && "x" && null);
//Eg
const obj = {
  name: "x",
  study: function (x) {
    console.log(`Study ${x}`);
  },
};
// Regular
if (obj.study) {
  obj.study("JavaScript");
}
//Short Circuting
obj.study && obj.study("MongoDB");

//The Nullish Coalescing Operator (??)( 0 and " " are not falsy values in this operator)
// In the short Circuting OR if the value is 0(falsy) hence it ishowing guests avialble so by using ?? we can solve the problem
const available3 = guests ?? 10;
console.log(available3);

//Logical Assignment Operators(ES 2021)

const school1 = {
  name: "Montessori",
  students: 0,
};
const school2 = {
  name: "BGMI",
  owner: "krafton",
};
// school1.students = school1.students || 230;
// school2.students = school2.students || 230;
// console.log(school1.students);
// console.log(school2.students);
// OR ASSIGNMENT OPERATOR
// school1.students ||= 230;
// school2.students ||= 230;
// console.log(school1.students);
// console.log(school2.students);
// Logical Nullish Assignment Operator(null or undefined)
school1.students ??= 230;
school2.students ??= 230;
console.log(school1.students);
console.log(school2.students);
//Logical AND operaor
// school1.owner = school1.owner && "Ananymous";
// school2.owner = school2.owner && "Ananymous";
school1.owner &&= "Ananymous";
school2.owner &&= "Ananymous";
console.log(school1.owner);
console.log(school2.owner);

// The for-of Loop
const arr = [1, 2, 3, 4, 5, 6];
for (const item of arr) console.log(item);
for (const item of arr.entries()) {
  console.log(item);
}

//Enhanced Object Literals

const courseTimings = {
  mon: "operatingSystems",
  tue: "Web Technologies",
  sat: "DBMS",
};
const student = {
  name: "x",

  regNo: "19bc456",
  //OLD WAY
  //courseTimings:courseTimings,
  //New WAY
  courseTimings,
  //OLD WAY of WRIting Functions
  // percentage: function (x) {
  //   console.log(x);
  // },
  // NEW Way
  percentage(x) {
    console.log(x);
  },
};
console.log(student);
student.percentage(89);

//Optional Chaining (?.)
console.log(student.courseTimings?.mon);
//multiple optional chaining
console.log(student?.courseTimings?.fri);
//EG
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = student.courseTimings?.[day] ?? "No class";
  console.log(day + " : " + open);
}
//Methods
student.percentage?.(35) ?? "Not exist";
console.log(student.rank?.(35) ?? "Not exist");
// Arrays
const users = [
  {
    name: "x",
    email: "wer@email.com",
  },
];

console.log(users[0]?.name ?? "Not Found");

//Looping Objects: Object Keys, Values, and Entries
// KEYS
const classDays = Object.keys(courseTimings);
console.log(classDays);
for (const day of classDays) {
  console.log(day);
}
// Property Values
const values = Object.values(courseTimings);
console.log(values);
// Entries
const entries = Object.entries(courseTimings);
// console.log(entries);

for (const x of entries) {
  console.log(entries);
}
