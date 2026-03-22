const pageLoader = document.getElementById('pageLoader');

window.addEventListener('load', () => {
    pageLoader.classList.add('hidden');
    setTimeout(() => {
        pageLoader.style.display = 'none';
    }, 500);
});