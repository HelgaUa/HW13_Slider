'use strict';

function slider(props) {
    let {slides, prevButton, nextButton, paginationContainer} = props;
    let currentIndex = 0;
    let paginationHTML = [];

    init();

    function init() {
        initPagination();
        changeSlide(currentIndex);
    }

    function initPagination() {
        for (let i = 0; i < slides.length; i++) {
            paginationHTML.push('<button class="pagination-btn"></button>')
        }
        paginationContainer.innerHTML = paginationHTML.join('');
    }

    function nextButtonClick() {
        changeSlide(currentIndex + 1);
        currentIndex++;
        hideOrShowButton();
    }

    function prevButtonClick() {
        changeSlide(currentIndex - 1);
        currentIndex--;
        hideOrShowButton();
    }

    function hideOrShowButton () {
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
    }

    function paginationButtonClick(index) {
        changeSlide(index);
        currentIndex = index;
        hideOrShowButton();
    }

    function changeSlide(index) {
        slides[currentIndex].classList.remove('active');
        slides[index].classList.add('active');
        paginationContainer.children[currentIndex].classList.remove('active');
        paginationContainer.children[index].classList.add('active');
    }


    prevButton.addEventListener('click', prevButtonClick);
    nextButton.addEventListener('click', nextButtonClick);
    Array.from(paginationContainer.children).forEach((value, i) => {
        value.addEventListener('click', (event) => {
            paginationButtonClick(i);
        });
    });
}

slider({
    slides: document.querySelectorAll('.js--slider-slide'),
    prevButton: document.querySelector('.js--slider-button__prev'),
    nextButton: document.querySelector('.js--slider-button__next'),
    paginationContainer: document.querySelector('.slider-pagination')
});

