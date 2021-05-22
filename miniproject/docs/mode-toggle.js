
document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme && currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (toggler) {
        toggler.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            let theme = (document.body.classList.contains('dark-theme') ? 'dark' : 'light');
            let icon = (theme === 'dark' ? 'icons/light-mode.svg' : 'icons/dark-mode.svg');
            toggler.src = icon;
            localStorage.setItem('theme', theme);
        });
    }
});