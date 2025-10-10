document.addEventListener("DOMContentLoaded", () => {
    let themeToggle = document.querySelector('[data-theme-toggle]');
    
    // Skip to content
    let skipToContent = document.querySelector('[data-skip-to-content]');

    if (skipToContent) {
        skipToContent.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.blur();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView();
        });
    }

    // Main menu
    let mainMenu = document.querySelector('[data-main-menu]');
    let mainMenuToggle = document.querySelector('[data-main-menu-toggle]');

    if (mainMenu) {
        new GreenstepMenu(mainMenu);

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

    // Language menu
    let languageMenu = document.querySelector('[data-language-menu]');

    if (languageMenu) {
        new Choices(languageMenu, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
        });
    }

    // Search form
    let searchToggle = document.querySelector('[data-search-toggle]');
    let mobileSearchToggle = document.querySelector('[data-mobile-search-toggle]');

    if (searchToggle && mobileSearchToggle) {
        let searchForm = document.querySelector('[data-search-form]');

        if (searchForm) {
            let searchFormOutsideClickListener = (event) => {
                if (!searchForm.contains(event.target) && 
                    !searchToggle.contains(event.target) && 
                    !mobileSearchToggle.contains(event.target) &&
                    !themeToggle.parentElement.contains(event.target)) {
                    closeSearchForm();
                }
            }

            searchToggle.addEventListener('click', toggleSearchForm);
            mobileSearchToggle.addEventListener('click', toggleSearchForm);

            function toggleSearchForm() {
                if (document.body.classList.contains('search-form-open')) {
                    closeSearchForm();
                }
                else {
                    openSearchForm();
                }
            }

            function openSearchForm() {
                let searchInput = searchForm.querySelector('[type="search"]');

                document.body.classList.add('search-form-open');
                searchToggle.setAttribute('aria-expanded', 'true');
                mobileSearchToggle.setAttribute('aria-expanded', 'true');
                searchToggle.setAttribute('aria-label', searchToggle.getAttribute('data-label-open'));
                mobileSearchToggle.setAttribute('aria-label', mobileSearchToggle.getAttribute('data-label-open'));
                searchForm.setAttribute('aria-hidden', 'false');

                if (searchInput) {
                    searchInput.focus();
                }

                window.addEventListener('click', searchFormOutsideClickListener);
            }

            function closeSearchForm() {
                document.body.classList.remove('search-form-open');
                searchToggle.setAttribute('aria-expanded', 'false')
                mobileSearchToggle.setAttribute('aria-expanded', 'false');
                searchToggle.setAttribute('aria-label', searchToggle.getAttribute('data-label-closed'));
                mobileSearchToggle.setAttribute('aria-label', mobileSearchToggle.getAttribute('data-label-closed'));
                searchForm.setAttribute('aria-hidden', 'true');

                window.removeEventListener('click', searchFormOutsideClickListener);
            }
        }
    }
});