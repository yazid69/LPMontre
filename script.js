document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.responsive-sub-menu');
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon');

    function updateDisplay() {
        if (window.innerWidth >= 768) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'none';
            menu.classList.remove('responsive-active-sub-menu');
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menu.classList.remove('responsive-active-sub-menu');
        }
    }

    function toggleMenu() {
        menu.classList.toggle('responsive-active-sub-menu');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }

    function closeMenu() {
        menu.classList.remove('responsive-active-sub-menu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }

    closeIcon.style.display = 'none';
    updateDisplay();

    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', closeMenu);

    window.addEventListener('resize', function() {
        updateDisplay();
    });
});
