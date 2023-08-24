document.body.style.overflow = 'hidden';
const loader = document.querySelector('.loaderContainer');
const container = document.querySelector('.container');
window.addEventListener('load', function () {
    loader.classList.add('inv')
    document.body.style.overflow = 'auto'
});