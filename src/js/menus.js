document.addEventListener("DOMContentLoaded", () => {    
    let mainMenu = document.querySelector('[data-main-menu]');
    let mainMenuToggle = document.querySelector('[data-main-menu-toggle]');
    let sitemap = document.querySelector('[data-sitemap]');

    if (mainMenu) {
        new GreenstepMainMenu(mainMenu);

        if (mainMenuToggle) {
            mainMenuToggle.addEventListener('click', () => {
                let expanded = mainMenuToggle.getAttribute('aria-expanded') === 'true' || false;
                
                document.body.classList.toggle('main-menu-open');
                document.body.classList.toggle('no-scroll');
                mainMenuToggle.setAttribute('aria-expanded', !expanded);
                mainMenuToggle.setAttribute('aria-label', !expanded ? mainMenuToggle.getAttribute('data-label-open') : mainMenuToggle.getAttribute('data-label-closed'));
            });
        }
    }

    if (sitemap) {
        new GreenstepSitemap(sitemap);
    }
});