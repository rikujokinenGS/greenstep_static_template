(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    let _window = typeof window !== 'undefined' ? window : this;

    let GreenstepSitemap = (_window.GreenstepSitemap = function (element) {
        let _ = this;

        if (element._GreenstepSitemap) return element._GreenstepSitemap;

        _.el = element;
        _.el._GreenstepSitemap = _;

        _.topLevelMenuItems = _.el.querySelectorAll(':scope > ul > li > a');
        _.allMenuItems = _.el.querySelectorAll('a[href]');
        _.lastActiveMenuItem = null;
        _.focusOnMenuLevel = null;
        _.hasFocus = false;

        _.addMenuItemKeyListeners();
    });

    let GreenstepSitemapPrototype = GreenstepSitemap.prototype;

    GreenstepSitemapPrototype.addMenuItemKeyListeners = function() {
        let _ = this;

        _.allMenuItems.forEach(function(menuItem) {
            menuItem.addEventListener('keydown', _.handleKeyPress.bind(_));
            menuItem.addEventListener('focus', _.handleFocus.bind(_, menuItem));
            menuItem.addEventListener('blur', _.releaseFocus.bind(_));
        });
    };

    GreenstepSitemapPrototype.handleKeyPress = function(e) {
        let _ = this;

        if (_.hasFocus) {
            let key = e.key || e.keyCode;
            let target = e.target;

            switch (key) {
                case ' ':
                case 32:
                    window.location = target.href;
                    break;

                case 'Left':
                case 'ArrowLeft':
                case 37:
                    if (_.focusOnMenuLevel == 1) {
                        _.previousMenuItem(target);
                    }
                    else {
                        _.previousMenuItem(target.closest('ul').parentNode.querySelector('a[href]'));
                    }
                    break;

                case 'Up':
                case 'ArrowUp':
                case 38:
                    if (_.focusOnMenuLevel == 2) {
                        _.previousMenuItem(target);
                    }
                    break;

                case 'Right':
                case 'ArrowRight':
                case 39:
                    if (_.focusOnMenuLevel == 1) {
                        _.nextMenuItem(target);
                    }
                    else {
                        _.nextMenuItem(target.closest('ul').parentNode.querySelector('a[href]'));
                    }
                    break;

                case 'Down':
                case 'ArrowDown':
                case 40:
                    if (_.focusOnMenuLevel == 1) {
                        _.focusOnSubMenu(target);
                    }
                    else {
                        _.nextMenuItem(target);
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

    GreenstepSitemapPrototype.focusOnSubMenu = function(menuItem) {
        let _ = this;

        let subMenu = menuItem.nextElementSibling;

        subMenu.querySelector(':scope > li > a[href]').focus();
    };

    GreenstepSitemapPrototype.nextMenuItem = function(currentMenuItem) {
        let _ = this;
        
        let nextMenuItem = currentMenuItem.closest('li').nextElementSibling;

        if (!nextMenuItem) {
            nextMenuItem = currentMenuItem.closest('ul').firstElementChild;
        }

        nextMenuItem.querySelector('a[href]').focus();
    };

    GreenstepSitemapPrototype.previousMenuItem = function(currentMenuItem) {
        let _ = this;
        
        let previousMenuItem = currentMenuItem.closest('li').previousElementSibling;

        if (!previousMenuItem) {
            previousMenuItem = currentMenuItem.closest('ul').lastElementChild;
        }

        previousMenuItem.querySelector('a[href]').focus();
    };

    GreenstepSitemapPrototype.changeFocusAway = function(e) {
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
    };

    function isVisible(el) {
        return !!(el.offsetParent || el instanceof SVGElement) &&
            getComputedStyle(el).display !== 'none' &&
            getComputedStyle(el).visibility !== 'hidden' &&
            el.getAttribute('aria-hidden') !== 'true';
    }

    GreenstepSitemapPrototype.handleFocus = function(menuItem) {
        let _ = this;

        if (!_.hasFocus) {
            menuItem.blur(); // Prevent focus flashing on first item when getting last active element
            _.hasFocus = true;

            if (!_.lastActiveMenuItem) {
                _.topLevelMenuItems[0].focus();
            }
            else {
                let menuLevel = _.getMenuLevel(_.lastActiveMenuItem);
                let focusOn = _.lastActiveMenuItem;

                setTimeout(() => {
                    focusOn.focus();
                }, 50);
            }
        }
        else {
            _.lastActiveMenuItem = menuItem;
        }

        _.focusOnMenuLevel = _.getMenuLevel(menuItem);
    };

    GreenstepSitemapPrototype.getMenuLevel = function(menuItem) {
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

    GreenstepSitemapPrototype.releaseFocus = function() {
        let _ = this;
        
        _.hasFocus = _.el.matches(":focus-within");
    };

    return GreenstepSitemap;
});