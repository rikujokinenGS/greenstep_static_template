document.addEventListener('DOMContentLoaded', function() {
    let animatableElements = document.querySelectorAll('[data-animation]');
    let animationOptions = {
        threshold: 0,
        rootMargin: "0px 0px -75px 0px",
    }

    if (animatableElements) {
        let animateIfInView = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.addEventListener("transitionend", function() {
                    entry.target.classList.add("animation-over");
                });

                setTimeout(function() {
                    entry.target.classList.add("animate");
                }, (entry.target.hasAttribute("data-animation-delay") ? entry.target.getAttribute("data-animation-delay") : 100));

                observer.unobserve(entry.target);
            });
        }, animationOptions);

        animatableElements.forEach(element => {
            animateIfInView.observe(element);
        });
    }
});