(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepPeopleCTA = (_window.GreenstepPeopleCTA = function (element) {
        let _ = this;

        if (element._GreenstepPeopleCTA) return element._GreenstepPeopleCTA;

        _.el = element;
        _.el._GreenstepPeopleCTA = _;

        _.maxOffset = 75;
        _.planes = [1, 1.25, 1.5, 1.75];
        _.parallaxContainer = _.el.querySelector('.people-cta__bg');
        
        _.init();
    });

    var GreenstepPeopleCTAPrototype = GreenstepPeopleCTA.prototype;

    GreenstepPeopleCTAPrototype.init = function() {
        let _ = this;

        _window.addEventListener('scroll', _.parallaxScroll.bind(_), { passive: true });
        _window.addEventListener('resize', _.parallaxScroll.bind(_));
        _.parallaxScroll();
    };

    GreenstepPeopleCTAPrototype.parallaxScroll = function() {
        let _ = this;

        if (!_window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            let images = _.parallaxContainer.querySelectorAll('img');
            let rect = _.parallaxContainer.getBoundingClientRect();
            let windowHeight = _window.innerHeight;
            let containerHeight = rect.height;
            let progress = (windowHeight - rect.top) / (windowHeight + containerHeight);

            progress = Math.max(0, Math.min(1, progress));

            images.forEach(image => {
                let planeAttr = image.getAttribute('data-parallax-plane');
                let plane = _.planes[parseInt(planeAttr) - 1] || 1;
                let translateY = (1 - 2 * progress) * _.maxOffset * plane;
                image.style.transform = `translateY(${translateY}px)`;
            });
        }
    };

    return GreenstepPeopleCTA;
});