document.addEventListener("DOMContentLoaded", () => {
    let themeToggle = document.querySelector('[data-theme-toggle]');
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
            let openSearchLinks = document.querySelectorAll('[href="#open-search"]');

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

            if (openSearchLinks) {
                openSearchLinks.forEach((link) => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        openSearchForm();
                    });
                });
            }

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

                setTimeout(() => {
                    window.addEventListener('click', searchFormOutsideClickListener);
                }, 500);
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