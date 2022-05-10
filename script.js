function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


let btn = document.querySelector('#btn');

function display() {
    alert('It was click');
}

btn.addEventListener('click', display);


