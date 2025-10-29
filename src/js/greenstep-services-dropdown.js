(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepServicesDropdown = (_window.GreenstepServicesDropdown = function (element, settings) {
        let _ = this;

        if (element._GreenstepServicesDropdown) return element._GreenstepServicesDropdown;

        _.settings = Object.assign(
            {}, {
                data: [],
                choicesOptions: {
                    searchEnabled: false,
                    itemSelectText: '',
                    shouldSort: false,
                }
            },
            settings
        );

        _.el = element;
        _.el._GreenstepServicesDropdown = _;

        _.select1Choices = null;
        _.select2Choices = null;

        _.init();
    });

    var GreenstepServicesDropdownPrototype = GreenstepServicesDropdown.prototype;

    GreenstepServicesDropdownPrototype.init = function() {
        let _ = this;

        _.setupDropdowns();
        _.setContent(_.settings.data[0].customProperties.services[0]);
    };

    GreenstepServicesDropdownPrototype.setupDropdowns = function() {
        let _ = this;

        _.select1Choices = new Choices(_.el.querySelector('#services-dropdown-select-1'), _.settings.choicesOptions);
        _.select2Choices = new Choices(_.el.querySelector('#services-dropdown-select-2'), _.settings.choicesOptions);

        _.select1Choices.passedElement.element.addEventListener('change', function() {     
            let select2Options = _.select1Choices.getValue().customProperties.services;

            _.populateSelectOptions(_.select2Choices, select2Options);
            _.select2Choices.setChoiceByValue(select2Options[0].value);
            _.setContent(select2Options[0]);
        });

        _.select2Choices.passedElement.element.addEventListener('change', function() {
            let selectedService = _.select2Choices.getValue();
            
            _.setContent(selectedService);
        });

        _.populateSelectOptions(_.select1Choices, _.settings.data);
        _.populateSelectOptions(_.select2Choices, _.settings.data[0].customProperties.services);

        _.select1Choices.containerOuter.element.setAttribute('role', 'menuitem');

        if (_.select1Choices.containerInner.element.querySelectorAll('.choices__list > *').length > 0) {
            _.select1Choices.containerInner.element.querySelector('.choices__list > *').removeAttribute('role');
            _.select1Choices.containerInner.element.querySelector('.choices__list > *').removeAttribute('aria-selected');
        }

        _.select2Choices.containerOuter.element.setAttribute('role', 'menuitem');

        if (_.select2Choices.containerInner.element.querySelectorAll('.choices__list > *').length > 0) {
            _.select2Choices.containerInner.element.querySelector('.choices__list > *').removeAttribute('role');
            _.select2Choices.containerInner.element.querySelector('.choices__list > *').removeAttribute('aria-selected');
        }
    };

    GreenstepServicesDropdownPrototype.populateSelectOptions = function(choices, data) {
        let _ = this;

        choices.clearStore();
        choices.setChoices(data);
    };

    GreenstepServicesDropdownPrototype.setContent = function(service) {
        let _ = this;

        let bg = _.el.querySelector('[data-service-bg]');
        let title = _.el.querySelector('[data-service-title]');
        let description = _.el.querySelector('[data-service-description]');
        let logo = _.el.querySelector('[data-service-logo]');
        let link = _.el.querySelector('[data-service-link]');

        let newBg = bg.cloneNode(false);
        newBg.src = service.customProperties.bg.src;
        newBg.alt = service.customProperties.bg.alt || '';
        newBg.width = service.customProperties.bg.width;
        newBg.height = service.customProperties.bg.height;
        newBg.classList.add('fade-in-image');

        bg.parentNode.insertBefore(newBg, bg.parentNode.firstChild);

        newBg.onload = function() {
            requestAnimationFrame(() => {
                newBg.style.opacity = 1;
            });

            const onTransitionEnd = function(e) {
                bg.src = newBg.src;
                bg.alt = newBg.alt;
                bg.width = newBg.width;
                bg.height = newBg.height;
                
                if (newBg.parentNode && newBg.parentNode.contains(newBg)) {
                    newBg.parentNode.removeChild(newBg);
                }
                
                newBg.removeEventListener('transitionend', onTransitionEnd);
            };
            newBg.addEventListener('transitionend', onTransitionEnd);
        };
        
        title.textContent = service.label;
        
        description.textContent = service.customProperties.description;

        logo.src = service.customProperties.logo.src;
        logo.alt = service.customProperties.logo.alt || '';
        logo.width = service.customProperties.logo.width;
        logo.height = service.customProperties.logo.height;

        link.href = service.customProperties.link;
    };

    return GreenstepServicesDropdown;
});