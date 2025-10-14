document.addEventListener('DOMContentLoaded', function() {
    const MAX_OFFSET = 75;
    let parallaxContainers = document.querySelectorAll('[data-greenstep-parallax]');
    let planes = [1, 1.25, 1.5, 1.75];

    function parallaxScroll() {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            parallaxContainers.forEach(parallaxContainer => {
                let images = parallaxContainer.querySelectorAll('img');
                let rect = parallaxContainer.getBoundingClientRect();
                let windowHeight = window.innerHeight;
                let containerHeight = rect.height;
                let progress = (windowHeight - rect.top) / (windowHeight + containerHeight);

                progress = Math.max(0, Math.min(1, progress));

                images.forEach(image => {
                    let planeAttr = image.getAttribute('data-parallax-plane');
                    let plane = planes[parseInt(planeAttr) - 1] || 1;
                    let translateY = (1 - 2 * progress) * MAX_OFFSET * plane;
                    image.style.transform = `translateY(${translateY}px)`;
                });
            });
        }
    }

    window.addEventListener('scroll', parallaxScroll, { passive: true });
    window.addEventListener('resize', parallaxScroll);
    parallaxScroll();
});