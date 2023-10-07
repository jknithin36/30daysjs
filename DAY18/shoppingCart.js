// EXPORTING MODULES

console.log('Exporting Module');

// blocking code
console.log('Start fetchng users');
const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
// only after the fetching this code next one is executed
console.log('finished fetching');

const shoppingCost = 10;
export const cart = [];

// Exports
// Named exports
//default exports

// 1 . Named Exports

// export const addTocart = (product, quantity) => {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

const totalPrice = 237;
const totalQuantity = 23;

// multipe exports
export { totalPrice, totalQuantity };

//2 Default ecports

export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
