const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// array structure   = [{},{}]
// retrive data
// using map
const dataMap = pizzaData.map((d) => {
  console.log(d);
});

// forOf
const movemnets = [200, -400, 400, 123, -457, 652, -123, -789, 9];

for (const movemnet of movemnets) {
  if (movemnet > 0) {
    console.log("postive");
  } else {
    console.log("negative");
  }
}

// forEach method
// syntax
// Array.foreach(function(paremater){....logic})
// forEach method doenn't create the new Array
// to acess the current index  = we nees the specift in 2 parameter
// Order of parametres
// 1. Value
// 2. index
// 3. array
// continue and break statements don't work on forEach() Method , it just loops the entire Array
movemnets.forEach((mov, index) => {
  mov > 0
    ? console.log(`Movement ${index + 1} : you deposited ${mov} Rupees`)
    : console.log(`Movement ${index + 1} : you withdrawn ${mov} Rupees`);
});
// mov refer to intial element in start then moves to +1
// Iteration
// 0(mov) = 200
// 1(mov) = -400
// 2(mov) = 400
// ......
//....
//..

// Data Transformation Methods
// map() Method
// map method gives us the new Array and it doesn't mutate the orginal Array
const eurToUSD = 1.1;

const mapEg = movemnets.map((mov) => {
  return mov * eurToUSD;
  // return 23;
});

console.log(mapEg);

// same using forOF loop

const movUSDArray = [];
for (const mov of movemnets) movUSDArray.push(mov * eurToUSD);
console.log(movUSDArray);

// Three parameters of map method
//1 value
//2 index
//3 array
console.log("----------------------using MAP--------------------");
const mapO = movemnets.map((mov, index) => {
  if (mov > 0) {
    return `Movement ${index + 1} : you deposited ${mov} Rupees`;
  } else {
    return `Movement ${index + 1} : you withdrawn ${mov} Rupees`;
  }
});

console.log(mapO);

// filter Marthod
// it will also creates a new array
const deposits = movemnets.filter(function (mov) {
  // here only true condits will return remain all filter out
  return mov > 0;
});
console.log(movemnets);
console.log(deposits);

// same using forOF
const depositsFor = [];

for (const mov of movemnets) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawls = movemnets.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawls);

const totalFilter = movemnets.filter((mov) => mov > 0);
const total = totalFilter.map((mov) => (mov += mov));
console.log(total);
console.log(total.slice(-1));

// Reduce Method
// redunce method gives one single value from an array
// 1 : accumulator
// 2 : current value
// 3 : index
// 4 : array
console.log(movemnets);
const balance = movemnets.reduce((acc, mov, i) => {
  console.log(`Iteration No: ${i} : ${acc} `);
  return acc + mov;
}, 0);
console.log(balance);
