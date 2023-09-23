'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2023-08-15T18:49:59.371Z',
    '2023-08-22T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };

  const daysPassed = Math.round(calcDaysPassed(new Date(), date));

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
};

///////////////////////////////////////////////////

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

/////////////////////////////////////////

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //current date
    const present = new Date();
    const day = `${present.getDate()}`.padStart(2, 0);
    const month = `${present.getMonth() + 1}`.padStart(2, 0);
    const year = present.getFullYear();
    const hour = `${present.getHours()}`.padStart(2, 0);
    const min = `${present.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // add trasfer date
    currentAccount.movementsDates.push(new Date().toISOString);
    receiverAcc.movementsDates.push(new Date().toISOString);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // dates
    currentAccount.movementsDates.push(new Date().toISOString);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Converting and Checking Numbers
// + ,Number.parseInt(), Number.parseFloat(), Number.isNan() , Number.isFinite(), Number.isInteger()
console.log(23 === 23.0);
// BASE 10 - 0 to 9
// BINARY 2 - 0 & 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
// converting string to numbers
console.log(Number('23'));
console.log(+'23');
//Parsing
//even if this some alphabets javascript will able to identify number but string should start with numbers
console.log(Number.parseInt('30px', 10));
// reads decimal number when it is string
console.log(Number.parseFloat('2.5rem'));
// check if value is Nan
console.log(Number.isNaN(23));
console.log(Number.isNaN('23'));
console.log(Number.isNaN(+'23x'));
// is a best way to check f value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(23 / 0));
// check wheather it is a integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

//Math and Rounding
// .sqrt , .max , .min , .PI , .random , .trunc , .ceil , .round , .floor , .toFixed
//sqauare root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
// cubic root
console.log(8 ** (1 / 3));
// TO GET MAx VALUE
console.log(Math.max(5, 6, 7, 8));
//to Get Min Value
console.log(Math.min(5, 6, 7, 8));
// radius
console.log(Math.PI * Number.parseFloat('10px') ** 2);
// Random Numbers
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min) + min + 1);
console.log(randomInt(20, 10));

// Rounding Integers
//trunc
console.log(Math.trunc(23.56));
//ceil
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.7));
//round
console.log(Math.round(23.3));
console.log(Math.round(23.7));
console.log(Math.round('323.789'));
//floor
console.log(Math.floor(-23.6));
console.log(Math.floor(-23.4));
//Rounding Decimals
// it returns String
console.log((27.5).toFixed(0));
// now it returns numbers
console.log((+27.5).toFixed(0));

// REAMINDER OPERATOR
console.log(5 % 2);
console.log(8 % 2);
console.log(8 % 3);

const oddEven = num => {
  if (num % 2 === 0) {
    console.log('EVEN');
  } else {
    console.log('ODD');
  }
};
oddEven(267);
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'green';
//   });
// });
//Numeric Separators
const diameter = 287_460_000_000;
console.log(diameter);
const priceCents = 345_99;
console.log(priceCents);
const trasferFee = 15_00;
const transfer = 1_500;
const PI = 3.14_15;
console.log(PI);
//Nan - because we should only use Numeric seperators on Numbers
console.log(Number('230_000'));
// BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// last we should add n
console.log(4567567658527585748574875845748578n);
console.log(BigInt(63566574657));
//
console.log(1000n + 1000n);
const huge = 787878878787878787878787878n * 10n;
console.log(huge);

// we can mix BigInt with other Numbers
//But we can do comparision
console.log(20n > 8);
console.log(typeof 70n);
console.log(typeof 7);
console.log(70n === 70);
console.log(huge + `is really big so we are using int`);
//Math opearations like sqrt doesn't work
// console.log(Math.sqrt(huge));
// Division
console.log(11n / 3n);

// DATES AND TIME
// Date
const now = new Date();
console.log(now);
console.log(new Date('Sep 22 2023 17:09:19'));
console.log(new Date('december 24, 2020'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15.23, 5));
console.log(new Date(2037, 11, 13));
console.log(new Date(0));
console.log(new Date(3 * 23 * 60 * 60 * 1000));

// date Methods
// .getFullYear, .getMonth , .getDate() .getMonth() , .getHours() ,
//.getMinutes ,  .getSeconds(), .toISOString() , .getTime() , Date.now() , .setFullYear()
const future = new Date(2037, 10, 19, 15.23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2142235800000));
console.log(Date.now());
future.setFullYear(2040);
console.log(future);

// DAY 11
console.log('--------------------------DAY 11--------------------------');

// Operation with Dates

console.log(Number(future));
const daysPassed = (date1, date2) => {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
};
const days1 = daysPassed(new Date(2023, 11, 13), new Date(2023, 11, 20));
console.log(days1);

// Internationalizing Dates (Intl
