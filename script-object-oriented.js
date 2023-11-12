'use strict';

function Slider (sliderClass) {
    this.slider = document.querySelector(sliderClass);
    this.slides = this.slider.querySelectorAll('.js--slider-slide');
    this.prevButton = this.slider.querySelector('.js--slider-button__prev');
    this.nextButton = this.slider.querySelector('.js--slider-button__next');
    this.paginationContainer = this.slider.querySelector('.slider-pagination');
    this.currentIndex = 0;
    this.paginationHTML = [];

    this.init = () => {
        this.initPagination();
        this.changeSlide (this.currentIndex);

        this.prevButton.addEventListener('click', this.prevButtonClick);
        this.nextButton.addEventListener('click', this.nextButtonClick);
        Array.from(this.paginationContainer.children).forEach((value, i) => {
            value.addEventListener('click', () => {
                this.paginationButtonClick(i);
            });
        });
    };

    this.initPagination = () => {
        for (let i = 0; i < this.slides.length; i++) {
            this.paginationHTML.push('<button class="pagination-btn"></button>')
        }
        this.paginationContainer.innerHTML = this.paginationHTML.join('');
    };

    this.nextButtonClick = () => {
        this.changeSlide (this.currentIndex + 1);
        this.currentIndex++;
        this.hideOrShowButton();
    };

    this.prevButtonClick = () => {
        this.changeSlide(this.currentIndex - 1);
        this.currentIndex--;
        this.hideOrShowButton();
    };

    this.hideOrShowButton = () => {
        this.prevButton.style.display = this.currentIndex === 0 ? 'none' : 'block';
        this.nextButton.style.display = this.currentIndex === this.slides.length - 1 ? 'none' : 'block';
    };

    this.paginationButtonClick = (index) => {
        this.changeSlide(index);
        this.currentIndex = index;
        this.hideOrShowButton();
    };

    this.changeSlide = (index) => {
        this.slides[this.currentIndex].classList.remove('active');
        this.slides[index].classList.add('active');
        this.paginationContainer.children[this.currentIndex].classList.remove('active');
        this.paginationContainer.children[index].classList.add('active');
    };
}

new Slider('.slider-section').init();