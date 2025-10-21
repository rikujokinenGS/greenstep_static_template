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
            _.addCaseStoryVideoIntersectionObservers();
        }
    };

    GreenstepBigHeroPrototype.addCaseStoryVideoEventListeners = function() {
        let _ = this;

        _.caseStories.forEach((caseStory) => {
            caseStory.addEventListener('mouseenter', () => {
                let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;
                let video = caseStory.querySelector('.case-story__background video');
                let sources = video.querySelectorAll('source');

                if (isMobileHero) return;

                if (sources[0].hasAttribute('data-src')) {
                    sources.forEach(source => {
                        source.setAttribute('src', source.getAttribute('data-src'));
                        source.removeAttribute('data-src');
                    });

                    video.load();
                }

                if (video.paused) {
                    video.play().catch(() => {}); // ignore autoplay errors
                }
            });

            caseStory.addEventListener('mouseleave', () => {
                let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;
                let video = caseStory.querySelector('.case-story__background video');

                if (isMobileHero) return;

                if (!video.paused) {
                    setTimeout(() => {
                        video.pause();
                    }, 100);
                }
            });
        });
    };

    GreenstepBigHeroPrototype.addCaseStoryVideoIntersectionObservers = function() {
        let _ = this;

        let options = {
            root: _.el.querySelector('.case-story__slider'),
            rootMargin: '0px 50px 0px 0px',
            threshold: 0
        };

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;
                let video = entry.target.querySelector('.case-story__background video');

                if (entry.isIntersecting) {
                    let sources = video.querySelectorAll('source');

                    if (sources[0].hasAttribute('data-src')) {
                        sources.forEach(source => {
                            source.setAttribute('src', source.getAttribute('data-src'));
                            source.removeAttribute('data-src');
                        });

                        video.load();
                    }

                    if (isMobileHero) {
                        video.addEventListener('loadeddata', () => {
                            entry.target.classList.add('hide-image');
                        });

                        if (video.readyState >= 2) {
                            entry.target.classList.add('hide-image');
                        }

                        video.play().catch(() => {}); // ignore autoplay errors
                    }
                }
                else if (isMobileHero) {
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