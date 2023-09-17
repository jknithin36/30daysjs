"use strict";

// SETS
// Built in data Structures
// Set is a collection of unique values(No duplicates);
// Set is aiterable
const orderSet = new Set([
  "Hello",
  "Today",
  "Today",
  "is",
  "Saturday",
  "Saturday",
]);
console.log(orderSet);
console.log(new Set("Helloo"));
// Methods
console.log(orderSet.size);
console.log(orderSet.has("Today"));
orderSet.add("Enjoy");
console.log(orderSet);
orderSet.delete("Enjoy");
console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);
//Looping
for (const i of orderSet) {
  console.log(i);
}
//Example
const roles = [
  "student",
  "teacher",
  "teacher",
  "watchman",
  "watchman",
  "student",
];
const rolesUnique = [...new Set(roles)];
console.log(rolesUnique);
console.log(
  new Set(["student", "teacher", "teacher", "watchman", "watchman", "student"])
    .size
);

// MAPS
const school = new Map();
school.set("name", "Montessori");
school.set(1, "Kurnool");
// console.log(school.set(2, "Gadwal"));
school.set(2, "Gadwal");
school
  .set("Subjects", ["Telugu", "hindi", "English", "maths", "Science", "Social"])
  .set("open", 9)
  .set("close", 18)
  .set(true, "We are Open")
  .set(false, "We are Close");
console.log(school.get("name"));
const time = 21;
//Short-circuting
console.log(
  school.get(time > school.get("open") && time < school.get("close"))
);
// Methods
//set
//get
console.log(school.has("Subjects"));
school.delete(2);
// console.log(school);
console.log(school.size);
//school.clear();
const arr = [1, 2];
school.set(arr, "test");
console.log(school);
console.log(school.has(arr));
//MAPS ITERATION

const question = new Map([
  ["question", "What is the Best Programming Language in the World"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try Again!"],
]);
console.log(question);
console.log(question.get("question"));
// WE can Convert Object to map using "new Map(Object.enteries(xxx))"
for (const [key, value] of question) {
  if (typeof key === Number) {
    console.log(`Answer ${key}:${value}`);
  }
}
const answer = 3;
// const answer = Number(prompt("Your Answer"));
console.log(answer);
// //this gives Boolean Value True Or False
console.log(question.get(question.get("correct") === answer));
// Convert map To Array
console.log([...question]);

// String Methods
const airline = "Air India";
const plane = "A123";
//To GET Character
console.log(plane[0]);
//To Get The Length
console.log(airline.length);
// To Get the Position (Frist)
console.log(airline.indexOf("i"));
// To Get the Position (Last)
console.log(airline.lastIndexOf("i"));
console.log(airline.slice(4));
console.log(airline.slice(-2));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(0, airline.lastIndexOf(" ")));
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You Got Middle Seat");
  } else {
    console.log("you Are Lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("1C");
checkMiddleSeat("23D");
console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());
// Fix Capitalization
const passenger = "MoNKeY";
const passengerLower = passenger.toLocaleLowerCase();
const correctName =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(correctName);
//Comparing Emails
const email = "insane4144124@.io";
const loginEmail = "Insane4144124@.io";

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);

const normalizeEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);
//Replacing
const priceGB = "234,43$";
const priceINR = priceGB.replace("$", " rupee").replace(",", ".");
console.log(priceINR);
const announcment =
  "All Passengers come to boarding door 23. Boarding door 23!";
console.log(announcment);
console.log(announcment.replace("door", "gate"));
console.log(announcment.replaceAll("door", "gate"));
//Booleans
const planeO = "Airbus A2345neo";
console.log(planeO.includes("A23"));
console.log(planeO.startsWith("A2"));
if (planeO.startsWith("Airbus") && planeO.endsWith("neo")) {
  console.log("It was a New Airplane");
}
//Practice Exercise
const checkBaggage = function (items) {
  const a = items.toLocaleLowerCase();
  if (a.includes("knife") || a.includes("gun")) {
    console.log("Caution.....Restricted Entry");
  } else {
    console.log("Enjoy Your Flight");
  }
};

checkBaggage("I have knife, Gun");
checkBaggage("I Have Books, Laptop");
//Split And Join
console.log("a+very+nice+string".split("+"));
const [fristName, lastName] = "Atomic Habits".split(" ");
const final = ["Book. ", fristName, lastName.toUpperCase()].join(" ");
console.log(final);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("atomic habits");
//Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "-"));

const myCreditCard = function (number) {
  //if one operand of the value is string then it converts into string
  const str = number + "";
  // it converts number to string because one of the operand is + in caluculation then it automatically converts to string

  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(myCreditCard(1234567890));
console.log(myCreditCard("1234567890"));
//Repeat Method
const update = "Bad Weather .... All departures Dealyed...  ";
console.log(update.repeat(3));
