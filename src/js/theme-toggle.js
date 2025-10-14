let savedTheme = localStorage.getItem('site-theme');
let preferred = window.matchMedia('(prefers-color-scheme: dark)');
let theme = preferred.matches ? 'dark' : 'light';

if (savedTheme !== null) {
    theme = savedTheme;
}

document.documentElement.setAttribute('data-theme', theme);

document.addEventListener('DOMContentLoaded', () => {
    let themeToggle = document.querySelector('[data-theme-toggle]');
    let mobileThemeToggle = document.querySelector('[data-mobile-theme-toggle]');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    function toggleTheme(e) {
        e.preventDefault();

        let newTheme = document.documentElement.getAttribute('data-theme') == 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('site-theme', newTheme);
    }

    preferred.addEventListener('change', (e) => {
        let newTheme = e.matches ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('site-theme', newTheme);
    });
});