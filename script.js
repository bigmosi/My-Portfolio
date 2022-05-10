function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

const btn = document.querySelector('#btn');

function display() {
  alert('It was click');
}

btn.addEventListener('click', display);