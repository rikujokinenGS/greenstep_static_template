(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepBigHero = (_window.GreenstepBigHero = function (element) {
        let _ = this;

        if (element._GreenstepBigHero) return element._GreenstepBigHero;

        _.el = element;
        _.el._GreenstepBigHero = _;

        _.caseStories = _.el.querySelectorAll('.case-story__item');

        _.init();
    });

    var GreenstepBigHeroPrototype = GreenstepBigHero.prototype;

    GreenstepBigHeroPrototype.init = function() {
        let _ = this;

        if (_.caseStories) {
            _.addCaseStoryVideoEventListeners();
            _.addResizeEventListener();
            _.addMobileStoryVideoIntersectionObservers();
        }
    };

    GreenstepBigHeroPrototype.addCaseStoryVideoEventListeners = function() {
        let _ = this;

        _.caseStories.forEach((caseStory) => {
            caseStory.addEventListener('mouseenter', () => {
                let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;

                if (isMobileHero) return;

                let video = caseStory.querySelector('.case-story__background video');
                let sources = video.querySelectorAll('source');

                if (sources[0].hasAttribute('data-src')) {
                    sources.forEach(source => {
                        source.setAttribute('src', source.getAttribute('data-src'));
                        source.removeAttribute('data-src');
                    });

                    video.load();
                }

                video.play();
            });

            caseStory.addEventListener('mouseleave', () => {
                let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;

                if (isMobileHero) return;

                let video = caseStory.querySelector('.case-story__background video');
                video.pause();
            });
        });
    };

    GreenstepBigHeroPrototype.addResizeEventListener = function() {
        let _ = this;

        _window.addEventListener('resize', () => {
            let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;

            _.caseStories.forEach((caseStory) => {
                let video = caseStory.querySelector('.case-story__background video');

                if (isMobileHero) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });
    };

    GreenstepBigHeroPrototype.addMobileStoryVideoIntersectionObservers = function() {
        let _ = this;

        let options = {
            rootMargin: '0% -25% 0% -25%',
            threshold: 0.5
        };

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;
                let video = entry.target.querySelector('.case-story__background video');

                if (!isMobileHero) return;

                if (entry.isIntersecting) {
                    let sources = video.querySelectorAll('source');

                    if (sources[0].hasAttribute('data-src')) {
                        sources.forEach(source => {
                            source.setAttribute('src', source.getAttribute('data-src'));
                            source.removeAttribute('data-src');
                        });

                        video.load();
                    }

                    video.play();
                    entry.target.classList.add('hide-image');
                }
                else {
                    video.pause();
                    entry.target.classList.remove('hide-image');
                }
            });
        }, options);

        _.caseStories.forEach((caseStory) => {
            observer.observe(caseStory);
        });
    };

    return GreenstepBigHero;
});