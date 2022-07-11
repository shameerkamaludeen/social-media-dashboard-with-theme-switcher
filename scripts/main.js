const themeMode = document.getElementById('theme-mode');

themeMode.addEventListener('change', function () {
    const bodyElement = document.querySelector('body');
    if (this.checked) {
        bodyElement.classList.remove('theme-light');
        bodyElement.classList.add('theme-dark');
    } else {
        bodyElement.classList.add('theme-light');
        bodyElement.classList.remove('theme-dark');
    }
});