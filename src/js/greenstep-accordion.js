/* @preserve
  Version: 1.0
  Author: Riku Jokinen
*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepAccordion = (_window.GreenstepAccordion = function (element) {
        let _ = this;

        if (element._GreenstepAccordion) return element._GreenstepAccordion;

        _.el = element;
        _.el._GreenstepAccordion = _;

        _.items = _.el.querySelectorAll('.accordion-item');

        _.init();
    });

    var GreenstepAccordionPrototype = GreenstepAccordion.prototype;

    GreenstepAccordionPrototype.init = function() {
        let _ = this;

        _.items.forEach((item) => {
            item.querySelector('button').addEventListener('click', _.toggleItem.bind(_, item));

            let itemLinks = item.querySelectorAll(".accordion-item__text a");

            if (itemLinks) {
                itemLinks.forEach((link) => {
                    link.setAttribute("tabindex", -1);
                });
            }
        });
    };

    GreenstepAccordionPrototype.toggleItem = function(item) {
        let _ = this;

        let button = item.querySelector('.accordion-item__title button');
        let content = item.querySelector('#' + button.getAttribute('aria-controls'));
        let state = button.getAttribute('aria-expanded') !== 'true';
        let itemLinks = item.querySelectorAll(".accordion-item__text a");

        button.setAttribute('aria-expanded', state);
        content.setAttribute('aria-hidden', !state);

        if (itemLinks) {
            itemLinks.forEach((link) => {
                link.setAttribute("tabindex", state ? 0 : -1);
            });
        }
    }

    return GreenstepAccordion;
});