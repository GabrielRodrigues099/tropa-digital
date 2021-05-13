const mobileBtn = document.querySelector('[data-button="mobileBtn"]');
const mobileMenu = document.querySelector('[data-menu="mobileMenu"]');

function showMenu() {
    mobileMenu.classList.toggle('menu__list--active');
}

mobileBtn.addEventListener('click', showMenu);