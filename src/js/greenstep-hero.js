(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepHero = (_window.GreenstepHero = function (element) {
        let _ = this;

        if (element._GreenstepHero) return element._GreenstepHero;

        _.el = element;
        _.el._GreenstepHero = _;

        _.caseStories = _.el.querySelectorAll('.case-story__item');

        _.init();
    });

    var GreenstepHeroPrototype = GreenstepHero.prototype;

    GreenstepHeroPrototype.init = function() {
        let _ = this;

        if (_.caseStories) {
            _.lazyLoadCaseStoryVideos();
            _.addCaseStoryVideoEventListeners();
            _.addResizeEventListener();
        }
    };

    GreenstepHeroPrototype.lazyLoadCaseStoryVideos = function() {
        let _ = this;
        let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;

        _.caseStories.forEach((caseStory) => {
            let video = caseStory.querySelector('.case-story__background video');

            video.querySelectorAll('source').forEach(source => {
                source.setAttribute('src', source.getAttribute('data-src'));
                source.removeAttribute('data-src');
            });

            video.load();

            if (isMobileHero) {
                video.play();
            }            
        });
    };

    GreenstepHeroPrototype.addCaseStoryVideoEventListeners = function() {
        let _ = this;

        _.caseStories.forEach((caseStory) => {
            caseStory.addEventListener('mouseenter', () => {
                let isMobileHero = parseInt(getComputedStyle(_.el).getPropertyValue("--mobile-hero")) == 1;

                if (isMobileHero) return;

                let video = caseStory.querySelector('.case-story__background video');
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

    GreenstepHeroPrototype.addResizeEventListener = function() {
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

    return GreenstepHero;
});