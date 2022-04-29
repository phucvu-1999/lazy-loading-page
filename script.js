'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(item => {
  item.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting element;
const header = document.querySelector('.header');
console.log('header: ', header);

const allSections = document.querySelectorAll('.section');
console.log('All sections: ', allSections);

const allButtons = document.getElementsByTagName('button');
console.log('All btns: ', allButtons);

console.log(
  'all elements that have btn className: ',
  document.getElementsByClassName('btn')
);

// Creating and selecting elements;
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookie to improve funtionality. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);

// header.append(message.cloneNode(true));
// DELETE Element;

const btnCookies = document.querySelector('.btn--close-cookie');

btnCookies.addEventListener('click', function () {
  header.removeChild(message);
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributtes;
// Standard attributes:
const logo = document.querySelector('.nav__logo');
console.log('logo src: ', logo.src);

// Custom attributes:
console.log('Custom attribute: ', logo.designer);
console.log(
  'This way can take the custome attribute: ',
  logo.getAttribute('designer')
);
logo.setAttribute('company', 'Bankist');
