(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepStats = (_window.GreenstepStats = function (element, settings) {
        let _ = this;

        if (element._GreenstepStats) return element._GreenstepStats;

        _.settings = Object.assign(
            {}, {
                duration: 2000,
                locale: 'en-US'
            },
            settings
        );

        _.el = element;
        _.el._GreenstepStats = _;
        
        _.statItems = _.el.querySelectorAll('[data-stats-item]');

        _.init();
    });

    var GreenstepStatsPrototype = GreenstepStats.prototype;

    GreenstepStatsPrototype.init = function() {
        let _ = this;

        if (_.el.getAttribute('data-greenstep-stats-duration')) {
            _.settings.duration = parseInt(_.el.getAttribute('data-greenstep-stats-duration'));
        }

        _.observer = new IntersectionObserver(_.handleIntersect.bind(_), {
            threshold: 1,
            rootMargin: "0px 0px -50px 0px"
        });

        if (_.statItems) {
            _.statItems.forEach((statItem) => {
                let start = statItem.getAttribute('data-start');
                let prefix = statItem.getAttribute('data-prefix');
                let suffix = statItem.getAttribute('data-suffix');

                if (!_window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                    statItem.innerText = prefix + start + suffix;
                    _.observer.observe(statItem);
                }
            });
        }
    };

    GreenstepStatsPrototype.handleIntersect = function(entries, observer) {
        let _ = this;

        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            let start = parseFloat(entry.target.getAttribute('data-start'));
            let end = parseFloat(entry.target.getAttribute('data-end'));
            let prefix = entry.target.getAttribute('data-prefix');
            let suffix = entry.target.getAttribute('data-suffix');
            let increment = 1;

            for (let i = 0; i < _.countDecimals(end); i++) {
                increment /= 10;
            }
            
            let duration = parseInt(_.settings.duration) / (end - start) * increment;
            
            while (duration < 10) {
                increment += .1;
                duration = parseInt(_.settings.duration) / (end - start) * increment;
            }

            let current = parseFloat(start + increment);
            let interval = setInterval(() => {
                let value = current.toFixed(_.countDecimals(end));

                entry.target.textContent = prefix + value.toLocaleString(_.settings.locale) + suffix;
                current = parseFloat(current + increment);

                if (current > end) {
                    entry.target.textContent = prefix + end.toLocaleString(_.settings.locale) + suffix;
                    clearInterval(interval);
                }
            }, duration);
            
            observer.unobserve(entry.target);
        });
    };

    GreenstepStatsPrototype.countDecimals = function(value) {
        if (Math.floor(value) === value) {
            return 0;
        }
    
        let str = value.toString();
    
        if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
            return str.split("-")[1] || 0;
        }
        else if (str.indexOf(".") !== -1) {
            return str.split(".")[1].length || 0;
        }
    
        return str.split("-")[1] || 0;
    };

    return GreenstepStats;
});