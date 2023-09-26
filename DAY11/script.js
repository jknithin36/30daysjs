'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
///////////////////////////////////////
// Modal window

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

////////////////////////////////////////////////////////////////////////
// scroll
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////////////////
//page scrooling
// not a good practice
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// 1 . add eventlistner common parent element
// 2 . Determine what element origiinated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////////////////////////
// Tabbed Component

// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('TAB');
//   })
// );

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Gaurd Clause
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate TAB
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Passing Arguments to Event Handlers
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// STICKY NAVIGATION
// const intialCoordinates = section1.getBoundingClientRect();
// window.addEventListener('scroll', e => {
//   // console.log(window.scrollY);
//   if (window.scrollY > intialCoordinates.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//The Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOption = {
//   root: null,
//   thershold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
/////////////////////////////////////////////////////////////////////////

// Revealing Elements on Scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
///////////////////////////////////////////////////////////////////////
//Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// SELECT CREATE DELETE DOM

// // 1) Select
// console.log(document.documentElement);
// // select whole Document
// console.log(document.head);
// // select Head
// console.log(document.body);
// // select Body
// const header = document.querySelector('.header');
// // to select single element
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);
// // to select multiple element and it returns NodeList
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// // it returns a HTML COLLECTION - if dom changes it automatically chanches
// console.log(document.getElementsByClassName('btn'));
// // it returns HTML COLLECTION

// // 2) Creating
// //insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// //to give className
// // message.textContent = 'we use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// // to insert at start
// header.append(message);
// // to insert at Last
// // header.prepend(message.cloneNode(true));
// // to get at both
// // header.before(message);
// // header.after(message);

// // Delete

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //STYLES
// message.style.backgroundColor = `#37383d`;
// message.style.width = '120%';

// console.log(message.style.height);
// // it will be blank because it is not the inline css
// console.log(message.style.backgroundColor);
// // it will be shown because we wrote inline css above
// console.log(getComputedStyle(message).color);
// // using getComputedStyle we gat the property with is not in inline css
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // css custom properties
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// // src , alt ......
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// // if it is nobuiltin attribute
// // console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));
// //Data Attributes
// console.log(logo.dataset.versionNumber);

// // classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// logo.className = "X"
// removes all classes of element and addd thid class so be aware

// Scroll
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const slcoords = section1.getBoundingClientRect();
// console.log(slcoords);
// console.log(e.target.getBoundingClientRect());
// console.log(`Curret Scroll (x/y) `, window.pageXOffset, pageYOffset);

// SCROOLING
// window.scrollTo(
//   slcoords.left + window.pageXOffset,
//   slcoords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: slcoords.left + window.pageXOffset,
//   top: slcoords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//   section1.scrollIntoView({
//     behavior: 'smooth',
//   });
// });

// Types of Events and Event Handlers
//mouseenter,click,mouseleave ..... MDN docs
// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('add eventListener: Gerat');

//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// //onEVENT PROPERTY
// // h1.onmouseenter = function (e) {
// //   alert('add eventListener: Gerat');
// // };

// 2

// // Event Propagation: Bubbling and Capturing
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
//     0,
//     255
//   )},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   //this target to current element
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);

//   //stop propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target);
// });

// Event Delegation:
//page navigation
// without evevnt delegation
// foreach because it is a nodelist
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// // 1 . add eventlistner common parent element
// // 2 . Determine what element origiinated the event
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log(e.target);
//   e.preventDefault();
//   if (e.target.classList.contains('.nav__lik')) {
//     // console.log('Link');
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: true,
//     });
//   }
// });

//3
// //DOM traversing
// const h1 = document.querySelector('h1');

// //going downwards : child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log((h1.firstElementChild.style.color = 'white'));
// console.log((h1.lastElementChild.style.color = 'orangered'));

// // going upwards

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'yellow';
// h1.closest('h1').style.background = 'green';

// //going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
