function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

function closeNavs() {
  document.getElementById('head-1').style.height = '0%';
}

closeNav();

const btn = document.querySelector('#btn');

function display() {
  alert('It was click');
}

btn.addEventListener('click', display);

function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('myNav');
  links.style.display = 'none';
}
