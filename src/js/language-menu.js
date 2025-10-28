document.addEventListener("DOMContentLoaded", () => {    
    let languageMenu = document.querySelector('[data-language-menu]');

    if (languageMenu) {
        let languageMenuChoices = new Choices(languageMenu, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
        });

        languageMenuChoices.containerOuter.element.setAttribute('role', 'menuitem');

        if (languageMenuChoices.containerInner.element.querySelectorAll('.choices__list > *').length > 0) {
            languageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('role');
            languageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('aria-selected');
        }

    }

    let mobileLanguageMenu = document.querySelector('[data-mobile-language-menu]');

    if (mobileLanguageMenu) {
        let mobileLanguageMenuChoices = new Choices(mobileLanguageMenu, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
        });

        mobileLanguageMenuChoices.containerOuter.element.setAttribute('role', 'menuitem');

        if (mobileLanguageMenuChoices.containerInner.element.querySelectorAll('.choices__list > *').length > 0) {
            mobileLanguageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('role');
            mobileLanguageMenuChoices.containerInner.element.querySelector('.choices__list > *').removeAttribute('aria-selected');
        }
    }
});