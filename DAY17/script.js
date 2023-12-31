// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////////////
// //  https://countries-api-836d.onrender.com/countries/
// // https://restcountries.com/v2/name/nepal
// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `
// //   <article class="country">
// //     <img class="country__img" src="${data.flag}" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name}</h3>
// //       <h4 class="country__region">${data.region}</h4>
// //       <p class="country__row"><span>👫</span>${(
// //         +data.population / 1000000
// //       ).toFixed(1)} people</p>
// //       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //     </div>
// //   </article>
// //   `;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };
// // getCountryData('NEPAl');
// // getCountryData('usa');
// // getCountryData('Singapore');
// // default parameters = className  ""
const renderCountry = function (data, className = '') {
  const html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// // const getCountryAndNeighbour = function (country) {
// //   // ajax call 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     // render country
// //     renderCountry(data);
// //     //get neighbours
// //     const neighbour = data.borders?.[1];
// //     console.log(neighbour);
// //     if (!neighbour) return;

// //     // ajax call 2

// //     const requesto = new XMLHttpRequest();
// //     requesto.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// //     requesto.send();
// //     requesto.addEventListener('load', function () {
// //       // console.log(this.responseText);
// //       const data2 = JSON.parse(this.responseText);
// //       console.log(data2);
// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };
// // getCountryAndNeighbour('Nepal');

// // // call back hell
// // // it makes our code difficult to understand that leads to bugs
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 second passed');
// //   }, 200);
// //   setTimeout(() => {
// //     console.log('3 second passed');
// //   }, 300);
// // }, 100);

// // Promises and the Fetch API
// // promise : An object that is used as a placeholder for the future result of an asynchronous operation
// // const getCountryData = function (country) {
// //   // Country 1
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);

// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = 'dfsdfdef';

// //       if (!neighbour) return;

// //       // Country 2
// //       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);

// //       return response.json();
// //     })
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // btn.addEventListener('click', function () {
// //   getCountryData('portugal');
// // });

// // getCountryData('australia');

// // Notes

// // two types
// // synchronous:
// //code is executed line by line
// // Each line of code waits for previous line to finish
// // disadvantages od synchronous
// // Long-running operations block code execution
// //
// //Asynchronous:
// // is executed after a task that runs in the background finishes
// // It is non-bocking
// //Execution doesn't wait for an asynchronous task to finish its work
// //call back alone do NOT makse asynchronous
// //
// //AJAX
// //Asynchronous JavaScript And XML
// // allows us to communicate with remote webservers in an asynchronous way. with AJAX calls we can request data from web servers dynamically
// //
// // API - Application Programming Interface
// //Peice of software that can be used by another peice of software, in order to allow application to talk to each other

// // The Event Loop
// // Event loop gives priority to microtasks queue than regular callback queue

// // console.log('Test Start');
// // setTimeout(() => {
// //   console.log('O sec timer'), 0;
// // });

// // Promise.resolve(`Resolved promise 1`).then(res => console.log(res));
// // Promise.resolve('Resolved promise 2').then(res => {
// //   for (let i = 0; i < 1000000; i++) {}
// //   console.log(res);
// // });
// // console.log('Test END');
// // 14342
// // microstack queue has high priority even timer has o seconds

// // create simple own promise
// // takes one parameter = execution function
// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log('Working in the Background');
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       // callimg resolve will mark this promise as a fullfilled promise
// //       resolve('YOU WIN**');
// //     } else {
// //       reject(new Error('Sorry Try AGAIN ....'));
// //     }
// //   }, 2000);
// // });

// // lotteryPromise
// //   // here response = resolve
// //   .then(res => {
// //     console.log(res);
// //   })
// //   // err = reject
// //   .catch(err => console.log(err));
// // //
// // // promisifying setTimeout
// // const wait = function (sec) {
// //   // no need of reject parameter
// //   return new Promise(function (resolve) {
// //     setTimeout(resolve, sec * 1000);
// //   });
// // };

// // wait(1)
// //   .then(() => {
// //     console.log('I waited for 1 seconds');
// //     return wait(1);
// //   })
// //   .then(() => {
// //     console.log('I waited for 2 seconds');
// //     return wait(1);
// //   })
// //   .then(() => {
// //     console.log('I waited for 3 seconds');
// //     return wait(1);
// //   })
// //   .then(() => console.log('I waited for 14second'));

// // Promise.resolve('AbC').then(x => console.log(x));
// // Promise.reject('ABC').catch(x => console.log(x));

// // // Geolocation
// // navigator.geolocation.getCurrentPosition(
// //   position => console.log(position),
// //   err => console.log(err)
// // );
// // console.log('Getting Position');

// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     // navigator.geolocation.getCurrentPosition(position => resolve(position)),
// //     //   err => reject(err);
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };

// // getPosition().then(pos => console.log(pos));

// // // EG
// // const whereAmI = function () {
// //   getPosition()
// //     .then(pos => {
// //       const { latitude: lat, longitude: lng } = pos.coords;

// //       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// //     })
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //       return res.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       console.log(`You are in ${data.city}, ${data.country}`);

// //       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// //     })
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Country not found (${res.status})`);

// //       return res.json();
// //     })
// //     .then(data => renderCountry(data[0]))
// //     .catch(err => console.error(`${err.message} `));
// // };

// // btn.addEventListener('click', whereAmI);

('use strict');
console.log(23 === '23');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
//
// consuming promises with async await
// try catch method
// new feature es2017
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} `);
//     renderError(` ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };
// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} `))
// //   .finally(() => console.log('3: Finished getting location'));
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} `);
//   }
//   console.log('3: Finished getting location');
// })();

//Running Promises in Parallel
const getThree = async function (c1, c2, c3) {
  try {
    //get JSON is function that take url as parameter and returns fecthed data in json format
    // const getJSON = function (url, errorMsg = 'Something went wrong') {
    //   return fetch(url).then(response => {
    //     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    //     return response.json();
    //   });
    // };
    // running in sequence
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // running in parallel
    // promise.all() is a helper function
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data);
    // map method on array
    console.log(data.map(d => d[0].capital));
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.log(err);
  }
};

getThree('nepal', 'china', 'india');

// Promise Combinators: race, allSettled and any
// 1. Promise.race
// returns frist completed promise among set of promises
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/nepal`),
    getJSON(`https://restcountries.com/v2/name/china`),
    getJSON(`https://restcountries.com/v2/name/india`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// 2.promise.allSettled
//when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('ERROR'),
  Promise.resolve('success'),
]).then(res => console.log(err));

// 3. promise.any()
//es2021
Promise.any([
  Promise.resolve('success'),
  Promise.reject('ERROR'),
  Promise.resolve('success'),
]).then(res => console.log(err));
