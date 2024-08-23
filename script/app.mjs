document.addEventListener('DOMContentLoaded', () => {
    const article = document.getElementById('article');
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
        startX = e.pageX - article.offsetLeft;
        scrollLeft = article.scrollLeft;
        article.style.cursor = 'grabbing';
    };

    const stopDragging = () => {
        article.style.cursor = 'grab';
    };

    const move = (e) => {
        e.preventDefault();
        if (!startX) return;
        const x = e.pageX - article.offsetLeft;
        const walk = (x - startX) * 2;
        article.scrollLeft = scrollLeft - walk;
    };

    article.addEventListener('mousedown', startDragging);
    article.addEventListener('mouseleave', stopDragging);
    article.addEventListener('mouseup', stopDragging);
    article.addEventListener('mousemove', move);

    // Touch events
    article.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - article.offsetLeft;
        scrollLeft = article.scrollLeft;
    });

    article.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - article.offsetLeft;
        const walk = (x - startX) * 2;
        article.scrollLeft = scrollLeft - walk;
    });
});