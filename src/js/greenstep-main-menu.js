(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    let _window = typeof window !== 'undefined' ? window : this;

    let GreenstepMainMenu = (_window.GreenstepMainMenu = function (element) {
        let _ = this;

        if (element._GreenstepMainMenu) return element._GreenstepMainMenu;

        _.el = element;
        _.el._GreenstepMainMenu = _;

        _.topLevelMenuItems = _.el.querySelectorAll(':scope > ul > li > a');
        _.allMenuItems = _.el.querySelectorAll('a[href]');
        _.lastActiveMenuItem = null;
        _.focusOnMenuLevel = null;
        _.hasFocus = false;
        _.outsideClickListener = null;

        _.init();
    });

    let GreenstepMainMenuPrototype = GreenstepMainMenu.prototype;

    GreenstepMainMenuPrototype.init = function() {
        let _ = this;
        
        _.addTopLevelMenuItemListeners();
        _.addMenuItemKeyListeners();
        _.setNegativeTabIndexes();
        _.setEscKeyListener();

        _.outsideClickListener = function(event) {
            if (!_.el.contains(event.target) && !document.querySelector('[data-theme-toggle]').parentElement.contains(event.target)) {
                _.closeAllSubMenus();
                _window.removeEventListener("mousedown", _.outsideClickListener);
            }
        };
    };

    GreenstepMainMenuPrototype.addTopLevelMenuItemListeners = function() {
        let _ = this;

        _.topLevelMenuItems.forEach(function(menuItem) {
            menuItem.addEventListener('click', _.toggleSubMenu.bind(_, menuItem));
            menuItem.addEventListener('click', _.toggleMobileSubMenu.bind(_, menuItem));
        });
    };

    GreenstepMainMenuPrototype.setEscKeyListener = function() {
        let _ = this;

        _window.addEventListener("keyup", (e) => {
            if (!_.hasFocus && (e.key == 'Esc' || e.key == 'Escape' || e.key == 27)) {
                _.closeAllSubMenus();
            }
        });
    };

    GreenstepMainMenuPrototype.addMenuItemKeyListeners = function() {
        let _ = this;

        _.allMenuItems.forEach(function(menuItem) {
            menuItem.addEventListener('keydown', _.handleKeyPress.bind(_));
            menuItem.addEventListener('focus', _.handleFocus.bind(_, menuItem));
            menuItem.addEventListener('blur', _.releaseFocus.bind(_));
        });
    };

    GreenstepMainMenuPrototype.handleKeyPress = function(e) {
        let _ = this;

        if (_.hasFocus) {
            let key = e.key || e.keyCode;
            let target = e.target;

            switch (key) {
                case 'Escape':
                case 'Esc':
                case 27:
                    if (_.focusOnMenuLevel == 2) {
                        _.closeParentSubMenu(target);
                    }
                    else if (_.focusOnMenuLevel > 2) {
                        if (target.parentNode.classList.contains('menu-item-card')) {
                            target.closest('ul').parentNode.previousElementSibling.firstElementChild.focus();
                        }
                        else {
                            target.closest('ul').previousElementSibling.focus();
                        }
                    }
                    else {
                        target.blur();
                    }
                    break;

                case ' ':
                case 32:
                    window.location = target.href;
                    break;

                case 'Left':
                case 'ArrowLeft':
                case 37:
                    if (_.focusOnMenuLevel <= 2) {
                        _.previousMenuItem(target);
                    }
                    else if (_.focusOnMenuLevel == 3) {
                        if (target.parentNode.classList.contains('menu-item-card')) {
                            _.previousMenuItem(target);
                        }
                        else {
                            _.previousMenuItem(target.closest('ul').previousElementSibling);
                        }
                    }
                    break;

                case 'Up':
                case 'ArrowUp':
                case 38:
                    if (_.focusOnMenuLevel == 2) {
                        _.closeSubMenu(target.parentNode.parentNode.previousElementSibling);
                        target.parentNode.parentNode.previousElementSibling.focus();
                    }
                    else if (_.focusOnMenuLevel == 3) {
                        if (target.parentNode.classList.contains('menu-item-card')) {
                            target.closest('ul').parentNode.previousElementSibling.firstElementChild.focus();
                        }
                        else {
                            _.previousMenuItem(target);
                        }
                    }
                    break;

                case 'Right':
                case 'ArrowRight':
                case 39:
                    if (_.focusOnMenuLevel <= 2) {
                        _.nextMenuItem(target);
                    }
                    else if (_.focusOnMenuLevel == 3) {
                        if (target.parentNode.classList.contains('menu-item-card')) {
                            _.nextMenuItem(target);
                        }
                        else {
                            _.nextMenuItem(target.closest('ul').previousElementSibling);
                        }
                    }
                    break;

                case 'Down':
                case 'ArrowDown':
                case 40:
                    if (_.focusOnMenuLevel == 1) {
                        if (target.getAttribute('aria-haspopup') == 'true') {
                            _.openSubMenu(target);
                            _.focusOnSubMenu(target);
                        }
                    }
                    else if (_.focusOnMenuLevel == 2) {
                        if (target.parentNode.classList.contains('menu-item-has-children')) {
                            _.focusOnSubMenu(target);
                        }
                    }
                    else {
                        if (!target.parentNode.classList.contains('menu-item-card')) {
                            _.nextMenuItem(target);
                        }
                    }
                    break;

                case 'Tab':
                case 9:
                    _.changeFocusAway(e);
                    break;

                case 'Home':
                case 'PageUp':
                case 36:
                case 33:
                    target.closest('ul').firstElementChild.querySelector('a[href]').focus();
                    break;

                case 'End':
                case 'PageDown':
                case 35:
                case 34:
                    target.closest('ul').lastElementChild.querySelector('a[href]').focus();
                    break;

                default:
                    if (key.length === 1 && key.match(/\S/)) {
                        let haystack = null;
    
                        haystack = target.parentNode.parentNode.querySelectorAll(":scope > li > a");
    
                        if (haystack) {
                            if (!_.letterState) _.letterState = {};
                            const letter = key.toLowerCase();
                            const matches = [...haystack].filter(el => el.innerText.charAt(0).toLowerCase() === letter);

                            if (matches.length) {
                                if (_.letterState.lastLetter === letter) {
                                    _.letterState.index = (_.letterState.index + 1) % matches.length;
                                } else {
                                    _.letterState.index = 0;
                                    _.letterState.lastLetter = letter;
                                }
                                matches[_.letterState.index].focus();
                            }
                        }
                    }
                    break;
            }

            e.preventDefault();
            e.stopPropagation();
        }
    };

    GreenstepMainMenuPrototype.focusOnSubMenu = function(menuItem) {
        let _ = this;

        let subMenu = menuItem.nextElementSibling;

        subMenu.querySelector(':scope > li > a[href]').focus();
    };

    GreenstepMainMenuPrototype.nextMenuItem = function(currentMenuItem) {
        let _ = this;
        
        let nextMenuItem = currentMenuItem.closest('li').nextElementSibling;

        if (!nextMenuItem) {
            nextMenuItem = currentMenuItem.closest('ul').firstElementChild;
        }

        nextMenuItem.querySelector('a[href]').focus();
    };

    GreenstepMainMenuPrototype.previousMenuItem = function(currentMenuItem) {
        let _ = this;
        
        let previousMenuItem = currentMenuItem.closest('li').previousElementSibling;

        if (!previousMenuItem) {
            previousMenuItem = currentMenuItem.closest('ul').lastElementChild;
        }

        previousMenuItem.querySelector('a[href]').focus();
    };

    GreenstepMainMenuPrototype.changeFocusAway = function(e) {
        let _ = this;

        let focusableElements = Array.from(document.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'));

        if (e.shiftKey) {
            focusableElements = focusableElements.slice().reverse();
        }

        let elementToFocusOn = focusableElements.find(el => 
            _.el !== el &&
            !_.el.contains(el) &&
            (_.el.compareDocumentPosition(el) & (e.shiftKey ? Node.DOCUMENT_POSITION_PRECEDING : Node.DOCUMENT_POSITION_FOLLOWING)) &&
            isVisible(el)
        );

        if (elementToFocusOn) {
            elementToFocusOn.focus();
        }

        _.closeAllSubMenus();
    };

    function isVisible(el) {
        return !!(el.offsetParent || el instanceof SVGElement) &&
            getComputedStyle(el).display !== 'none' &&
            getComputedStyle(el).visibility !== 'hidden' &&
            el.getAttribute('aria-hidden') !== 'true';
    }

    GreenstepMainMenuPrototype.handleFocus = function(menuItem) {
        let _ = this;
        let isMobileMenu = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-menu")) == 1;

        if (!isMobileMenu) {
            if (!_.hasFocus) {
                menuItem.blur(); // Prevent focus flashing on first item when getting last active element
                _.hasFocus = true;

                if (!_.lastActiveMenuItem) {
                    _.topLevelMenuItems[0].focus();
                }
                else {
                    let menuLevel = _.getMenuLevel(_.lastActiveMenuItem);
                    let focusOn = _.lastActiveMenuItem;

                    if (menuLevel == 2) {
                        _.openSubMenu(_.lastActiveMenuItem.closest('ul').previousElementSibling);
                    }
                    else if (menuLevel == 3) {
                        if (_.lastActiveMenuItem.parentNode.classList.contains('menu-item-card')) {
                            _.openSubMenu(_.lastActiveMenuItem.closest('ul').parentNode.closest('ul').previousElementSibling);
                        }
                        else {
                            _.openSubMenu(_.lastActiveMenuItem.closest('ul').previousElementSibling.closest('ul').previousElementSibling);
                        }
                    }

                    setTimeout(() => {
                        focusOn.focus();
                    }, 50);
                }
            }
            else {
                _.lastActiveMenuItem = menuItem;
            }

            _.focusOnMenuLevel = _.getMenuLevel(menuItem);
        }
    };

    GreenstepMainMenuPrototype.getMenuLevel = function(menuItem) {
        if (menuItem.parentNode.parentNode.getAttribute("role") == "menubar") {
            return 1;
        }
        else if (menuItem.parentNode.parentNode.parentNode.parentNode.getAttribute("role") == "menubar") {
            return 2;
        }
        else if (menuItem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("role") == "menubar") {
            return 3;
        }

        return null;
    };

    GreenstepMainMenuPrototype.releaseFocus = function() {
        let _ = this;
        let isMobileMenu = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-menu")) == 1;

        if (!isMobileMenu) {
            _.hasFocus = _.el.matches(":focus-within");
        }
    };

    GreenstepMainMenuPrototype.toggleSubMenu = function(menuItem, event) {
        let _ = this;

        if (event) {
            event.preventDefault();
        }

        let isExpanded = menuItem.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            _.closeSubMenu(menuItem);
        } else {
            _.closeAllSubMenus();
            _.openSubMenu(menuItem);
        }
    };

    GreenstepMainMenuPrototype.toggleMobileSubMenu = function(menuItem, event) {
        let _ = this;

        let isMobileMenu = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-menu")) == 1;

        if (isMobileMenu) {
            menuItem.scrollIntoView();
        }
    };

    GreenstepMainMenuPrototype.openSubMenu = function(menuItem) {
        let _ = this;

        let isMobileMenu = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-menu")) == 1;
        let subMenu = menuItem.nextElementSibling;

        if (subMenu && subMenu.getAttribute('role') === 'menu') {
            menuItem.setAttribute('aria-expanded', true);
            subMenu.setAttribute('aria-hidden', false);

            if (!isMobileMenu) {
                _window.removeEventListener("mousedown", _.outsideClickListener);
                _window.addEventListener("mousedown", _.outsideClickListener);
            }

            _.lastActiveMenuItem = menuItem;
        }
    };

    GreenstepMainMenuPrototype.closeSubMenu = function(menuItem) {
        let _ = this;

        let isMobileMenu = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-menu")) == 1;
        let subMenu = menuItem.nextElementSibling;

        if (subMenu && subMenu.getAttribute('role') === 'menu' && menuItem.getAttribute('aria-haspopup') == 'true') {
            menuItem.setAttribute('aria-expanded', false);
            subMenu.setAttribute('aria-hidden', true);

            if (!isMobileMenu) {
                _window.removeEventListener("mousedown", _.outsideClickListener);
            }
        }
    };

    GreenstepMainMenuPrototype.closeParentSubMenu = function(menuItem) {
        let _ = this;

        let parentMenuItem = menuItem.closest('ul').previousElementSibling;

        if (parentMenuItem && parentMenuItem.getAttribute('aria-haspopup') === 'true') {
            _.closeSubMenu(parentMenuItem);
            parentMenuItem.focus();
        }
    };

    GreenstepMainMenuPrototype.closeAllSubMenus = function() {
        let _ = this;

        _.topLevelMenuItems.forEach(function(menuItem) {
            _.closeSubMenu(menuItem);
        });

        _.focusOnMenuLevel = null;
        _.hasFocus = false;
    };

    GreenstepMainMenuPrototype.setNegativeTabIndexes = function() {
        let _ = this;

        if (_.allMenuItems) {
            _.allMenuItems.forEach((item) => {
                let parent = item.closest('ul');

                if (parent && parent.getAttribute('aria-hidden') === 'true') {
                    item.tabIndex = -1;
                }
            });
        }
    }

    return GreenstepMainMenu;
});