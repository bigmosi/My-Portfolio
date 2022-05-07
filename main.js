const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else  {
        menuBtn.classList.remove('open')
        menuOpen = false;
    }
});


/* eslint-disable */
function menuFunction() {
    const links = document.getElementById('mobile-men');
    if (links.style.display === 'block') {
        links.style.display = 'none';
    } else if (window.screen.width < 768) {
        links.style.display = 'block';
    } else {
        links.style.display = 'none';
    }
}


function menuOptions(param) {
    window.location.href = param;
    const links = document.getElementById('mobile-men');
    links.style.display = 'block';
}
