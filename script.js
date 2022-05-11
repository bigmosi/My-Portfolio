function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

closeNav();

const btn = document.querySelector('#btn');

function display() {
  alert('It was click');
}

btn.addEventListener('click', display);

/* eslint-disable */

function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('myNav');
  closeNav();
}


// form validation
const form = document.querySelector('.form-text');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter email a lowercase input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

