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
        setTimeout(() => { // Avoid forced reflow
            let languageMenuChoices = new Choices(languageMenu, {
                searchEnabled: false,
                itemSelectText: '',
                shouldSort: false,
            });

            languageMenuChoices.containerOuter.element.setAttribute('role', 'menuitem');
            languageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('role');
            languageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('aria-selected');
        }, 100);
    }

    let mobileLanguageMenu = document.querySelector('[data-mobile-language-menu]');

    if (mobileLanguageMenu) {
        let mobileLanguageMenuChoices = new Choices(mobileLanguageMenu, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
        });

        mobileLanguageMenuChoices.containerOuter.element.setAttribute('role', 'menuitem');
        mobileLanguageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('role');
        mobileLanguageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('aria-selected');
    }

    // Search form
    let searchToggle = document.querySelector('[data-search-toggle]');
    let mobileSearchToggle = document.querySelector('[data-mobile-search-toggle]');

    if (searchToggle && mobileSearchToggle) {
        let searchForm = document.querySelector('[data-search-form]');
        
        if (searchForm) {
            let searchInput = searchForm.querySelector('[type="search"]');
            let searchLoader = searchForm.querySelector('.search-loading');
            let searchResultsContainer = searchForm.querySelector('[data-search-results]');
            let searchResultsList = searchForm.querySelector('[data-search-results-list]');
            let searchResultsCount = searchForm.querySelector('[data-search-results-count]');
            let searchResultsKeyword = searchForm.querySelector('[data-search-results-keyword]');
            let searchTimeout = null;

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
            searchInput.addEventListener("keyup", () => {
                clearTimeout(searchTimeout);

                if (searchInput.value == "") {
                    searchResultsContainer.classList.remove("show");
                    document.body.classList.remove('search-results-shown');
                    return;
                }

                if (searchInput.value.length > 2) {
                    searchTimeout = setTimeout(fetchSearchResults, 500);
                };
            });

            function fetchSearchResults() {
                clearTimeout(searchTimeout);
                searchLoader.classList.add("show");
                searchResultsContainer.classList.remove("show");

                setTimeout(() => {
                    let count = Math.floor(Math.random() * 100);
                    searchResultsCount.textContent = count;
                    searchResultsKeyword.textContent = searchInput.value;

                    searchResultsList.innerHTML = "";

                    for (let i = 0; i < count; i++) {
                        let listItem = document.createElement("li");
                        listItem.classList.add("search-result");

                        let article = document.createElement("article");

                        let link = document.createElement("a");
                        link.href = "#";
                        
                        let tagline = document.createElement("p");
                        tagline.classList.add("tagline");
                        tagline.textContent = "Sample Tagline";

                        let title = document.createElement("h1");
                        title.textContent = `Sample Search Result Title ${i + 1}`;

                        let url = document.createElement("p");
                        url.classList.add("url");
                        url.textContent = "https://www.greenstep.fi/articles/sample-url-path";

                        link.appendChild(tagline);
                        link.appendChild(title);
                        link.appendChild(url);
                        article.appendChild(link);
                        listItem.appendChild(article);
                        searchResultsList.appendChild(listItem);
                    }

                    searchResultsContainer.classList.add("show");
                    searchLoader.classList.remove("show");
                    document.body.classList.add('search-results-shown');

                    searchResultsList.scroll({ top: 0 });
                }, 500);
            }

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
                document.body.classList.remove('search-results-shown');
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