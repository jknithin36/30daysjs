// // import {
// //   addTocart,
// //   totalPrice as price,
// //   totalQuantity,
// // } from './shoppingCart.js';
// // impoeting all

// // import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing modules');
// // addTocart('Oreo Buscuits', 5);
// // console.log(price, totalQuantity);
// // ShoppingCart.addTocart('Treat', 6);
// // console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
// //never export named and default exports together
// // here this is just for reference
// import add, { cart } from './shoppingCart.js';

// add('Pizza', 5);
// add('Bread', 7);
// add('Banana', 12);

// console.log(cart);

// // // Top-Level await (ES2022)
// // // top level await blocks the code execution
// // console.log('Start Fetching');
// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);
//   // at() method
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // const lastPost =  getLastPost();
// // console.log(lastPost);
// // returns pending promise because still js engine did't fetched the data in the async function

// // solution 1
// // const lastPost = getLastPost();
// // lastPost.then(res => console.log(res));

// // solution 2
// const lastPost = await getLastPost();
// console.log(lastPost);

// MODULE PATTERN

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// // console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// CommonJS Modules
//this will onlyy work in node.js
// Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//   );
// };

// // IMPORT

// const{ addToCart} = require('./shoppingCart.js')

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'Onion', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);
console.log(stateClone);
