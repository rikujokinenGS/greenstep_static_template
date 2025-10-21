document.addEventListener("DOMContentLoaded", () => {
    let skipToContent = document.querySelector('[data-skip-to-content]');

    if (skipToContent) {
        skipToContent.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.blur();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView();
        });
    }
});