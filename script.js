const buttonW = 100;
const buttonH = 50;
const maxWidth = window.innerWidth - buttonW;
const maxHeight = window.innerHeight - buttonH;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('noButton');

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});
