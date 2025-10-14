document.addEventListener('DOMContentLoaded', function() {
    const MAX_OFFSET = 75;
    let sections = document.querySelectorAll('[data-parallax]');
    let planes = [1, 1.375, 1.75, 2.125];

    function parallaxScroll() {
        sections.forEach(section => {
            let images = section.querySelectorAll('[data-plane]');
            let rect = section.getBoundingClientRect();
            let windowHeight = window.innerHeight;
            let sectionHeight = rect.height;
            let progress = (windowHeight - rect.top) / (windowHeight + sectionHeight);

            progress = Math.max(0, Math.min(1, progress));

            images.forEach(img => {
                let planeAttr = img.getAttribute('data-plane');
                let plane = planes[parseInt(planeAttr) - 1] || 0;
                let translateY = (1 - 2 * progress) * MAX_OFFSET * plane;
                img.style.transform = `translateY(${translateY}px)`;
            });
        });
    }

    window.addEventListener('scroll', parallaxScroll, { passive: true });
    window.addEventListener('resize', parallaxScroll);
    parallaxScroll();
});