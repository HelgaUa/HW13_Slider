'use strict';

const slides = document.querySelectorAll('.js--slider-slide');
const prevButton = document.querySelector('.js--slider-button__prev');
const nextButton = document.querySelector('.js--slider-button__next');
const paginationContainer = document.querySelector('.slider-pagination');
let currentIndex = 0;
let paginationHTML = [];


for (let i = 0; i < slides.length; i++) {
    paginationHTML.push('<button class="pagination-btn"></button>')
}
paginationContainer.innerHTML = paginationHTML.join('');

slides[currentIndex].classList.add('active');
paginationContainer.children[currentIndex].classList.add('active');

prevButton.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    paginationContainer.children[currentIndex].classList.remove('active');

    currentIndex--;
    slides[currentIndex].classList.add('active');
    paginationContainer.children[currentIndex].classList.add('active');

    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
});

nextButton.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    paginationContainer.children[currentIndex].classList.remove('active');

    currentIndex++;
    paginationContainer.children[currentIndex].classList.add('active');
    slides[currentIndex].classList.add('active');

    nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
});

Array.from(paginationContainer.children).forEach((value, i) => {
    value.addEventListener('click', (event) => {
        slides[currentIndex].classList.remove('active');
        paginationContainer.children[currentIndex].classList.remove('active');

        currentIndex = i;
        slides[currentIndex].classList.add('active');
        event.target.classList.add('active');

        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
    });
});

