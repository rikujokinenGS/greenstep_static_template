/* @preserve
  Version: 1.0
  Author: Riku Jokinen
*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : typeof exports === 'object' ? (module.exports = factory()) : factory()
})(function () {
    ('use strict')

    var _window = typeof window !== 'undefined' ? window : this;

    var GreenstepTOC = (_window.GreenstepTOC = function (element) {
        let _ = this;

        if (element._GreenstepTOC) return element._GreenstepTOC;

        _.el = element;
        _.el._GreenstepTOC = _;
        _.observer = null;
        _.activeHeadingId = null;

        _.linksContainer = _.el.querySelector('[data-greenstep-toc-links]');
        _.contentContainer = _.el.querySelector('[data-greenstep-toc-content]');
        _.headings = _.contentContainer.querySelectorAll(':is(h1, h2, h3, h4, h5, h6)');

        _.init();
    });

    var GreenstepTOCPrototype = GreenstepTOC.prototype;

    GreenstepTOCPrototype.init = function() {
        let _ = this;

        _.createTOCList();
        _.setHeadingObservers();
    };

    GreenstepTOCPrototype.createTOCList = function() {
        let _ = this;

        _.headings.forEach((heading) => {
            let slug = _.convertToSlug(heading.innerText);
            heading.id = slug;

            let tocListItem = document.createElement("li");
            let tocLink = document.createElement("a");
            tocLink.href = "#" + slug;
            tocLink.innerText = heading.innerText;

            tocListItem.appendChild(tocLink);

            _.linksContainer.appendChild(tocListItem);
        });
    }

    GreenstepTOCPrototype.setHeadingObservers = function() {
        let _ = this;

        _.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let id = `#${entry.target.getAttribute('id')}`;

                if (entry.isIntersecting) {
                    _.activeHeadingId = id;
                    _.highlightActiveTocHeading(id);
                }
            });
        }, {
            rootMargin: "0% 0% -50% 0%",
            threshold: 1
        });
        
        _.headings.forEach((heading) => {
            _.observer.observe(heading);
        });
    };

    GreenstepTOCPrototype.highlightActiveTocHeading = function(id) {
        let _ = this;

        _.linksContainer.querySelectorAll('a').forEach((link) => {
            if (link.getAttribute('href') === id) {
                link.classList.add('in-view');
            }
            else {
                link.classList.remove('in-view');
            }
        });
    }

    GreenstepTOCPrototype.convertToSlug = function(str) {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();

        let from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
        let to = "aaaaaeeeeeiiiiooooouuuunc------";

        for (let i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

        return str;
    };

    return GreenstepTOC;
});