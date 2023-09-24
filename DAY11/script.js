'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// SELECT CREATE DELETE DOM

// 1) Select
console.log(document.documentElement);
// select whole Document
console.log(document.head);
// select Head
console.log(document.body);
// select Body
const header = document.querySelector('.header');
// to select single element
const allSection = document.querySelectorAll('.section');
console.log(allSection);
// to select multiple element and it returns NodeList
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// it returns a HTML COLLECTION - if dom changes it automatically chanches
console.log(document.getElementsByClassName('btn'));
// it returns HTML COLLECTION

// 2) Creating
//insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
//to give className
// message.textContent = 'we use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// to insert at start
header.append(message);
// to insert at Last
// header.prepend(message.cloneNode(true));
// to get at both
// header.before(message);
// header.after(message);

// Delete

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//STYLES
message.style.backgroundColor = `#37383d`;
message.style.width = '120%';

console.log(message.style.height);
// it will be blank because it is not the inline css
console.log(message.style.backgroundColor);
// it will be shown because we wrote inline css above
console.log(getComputedStyle(message).color);
// using getComputedStyle we gat the property with is not in inline css
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// css custom properties
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// src , alt ......
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// if it is nobuiltin attribute
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src'));
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
//Data Attributes
console.log(logo.dataset.versionNumber);

// classes

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// logo.className = "X"
// removes all classes of element and addd thid class so be aware
