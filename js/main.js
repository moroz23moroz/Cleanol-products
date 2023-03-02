'use strict'

new Swiper('.banner__slider', {
    navigation: {
        nextEl: '.banner__nav-button_next',
        prevEl: '.banner__nav-button_prev'
    },
    scrollbar: {
        el: '.banner__pagination',
        draggable: true 
    }
});