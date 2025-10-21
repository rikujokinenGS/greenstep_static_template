document.addEventListener("DOMContentLoaded", () => {    
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
});