function openNav() {
    document.getElementById('myNav').style.height = '100%';
    console.log("open")``
}

// openNav();

function closeNav() {
    document.getElementById('myNav').style.height = '0%';
    console.log("close")
}

// closeNav();

const btn = document.querySelector('#btn');

function display() {
    alert('It was click');
}

btn.addEventListener('click', display);

function menuOptions(param) {
    window.location.href = param;
    const links = document.getElementById('myNav');
    closeNav();
}
