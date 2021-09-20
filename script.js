const toggleClassName = () => {
    const navigationList = document.querySelector('.navigation-list');
    navigationList.classList.toggle('burger-menu-open');
}

const burgerMenu = document.querySelector('.burger-icon');
burgerMenu.addEventListener('click', toggleClassName );

