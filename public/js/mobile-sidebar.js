document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.section-sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});
