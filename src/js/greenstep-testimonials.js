(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepTestimonials = (_window.GreenstepTestimonials = function (element) {
        let _ = this;

        if (element._GreenstepTestimonials) return element._GreenstepTestimonials;

        _.el = element;
        _.el._GreenstepTestimonials = _;

        _.currentIndex = 0;

        _.container = _.el.querySelector('.testimonials__items');
        _.items = _.container.querySelectorAll('.testimonial-item');
        _.prevBtns = _.el.querySelectorAll('.testimonials__navigation-button--prev');
        _.nextBtns = _.el.querySelectorAll('.testimonials__navigation-button--next');

        _.init();
    });

    var GreenstepTestimonialsPrototype = GreenstepTestimonials.prototype;

    GreenstepTestimonialsPrototype.init = function() {
        let _ = this;

        _.container.addEventListener('scroll', function(e) {
            let container = e.target;

            if (container.scrollLeft === 0) {
                _.prevBtns.forEach(btn => btn.setAttribute('disabled', ''));
            }
            else {
                _.prevBtns.forEach(btn => btn.removeAttribute('disabled'));
            }

            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                _.nextBtns.forEach(btn => btn.setAttribute('disabled', ''));
            }
            else {
                _.nextBtns.forEach(btn => btn.removeAttribute('disabled'));
            }
        });

        _.container.addEventListener('scrollsnapchange', function(e) {
            _.currentIndex = Array.prototype.indexOf.call(_.items, e.snapTargetInline);
        });

        _.prevBtns.forEach(btn => btn.addEventListener('click', _.previous.bind(_)));
        _.nextBtns.forEach(btn => btn.addEventListener('click', _.next.bind(_)));
    };

    GreenstepTestimonialsPrototype.show = function(index) {
        let _ = this;

        _.items[_.currentIndex].classList.remove('active');
        _.items[index].classList.add('active');
        _.currentIndex = index;

        _.items[index].scrollIntoView({ container: 'nearest', behavior: 'smooth', inline: 'start' });
    };

    GreenstepTestimonialsPrototype.previous = function() {
        let _ = this;
        let previousIndex = _.currentIndex - 1;

        if (previousIndex < 0) {
            return;
        }

        _.show(previousIndex);
    };

    GreenstepTestimonialsPrototype.next = function() {
        let _ = this;
        let nextIndex = _.currentIndex + 1;

        if (nextIndex >= _.items.length) {
            return;
        }

        _.show(nextIndex);
    };

    return GreenstepTestimonials;
});