import '../sass/main.scss';

import $ from 'jquery'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/popover';

import { Swiper, Navigation, Pagination, EffectFade } from 'swiper/js/swiper.esm.js';

Swiper.use([Navigation, Pagination, EffectFade]);

import Thumbs from './components/Thumbs';

const thumbs = new Thumbs('.single-product-gallery-thumbs'); 

const productSlider = new Swiper('.single-product-gallery__slider', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    on: {
        init: function () {
            thumbs.update(this.activeIndex);
        },
        slideChange: function() {
            thumbs.update(this.activeIndex);
        }
    }
});

thumbs.onClick((e) => {
    if (e.target.matches('[data-slide-to]')) {
        let { slideTo : index } = e.target.dataset;
        productSlider.slideTo(index);
    }
});


const variantList = document.querySelector('.variations__list--individual');

if (variantList.scrollHeight > variantList.offsetHeight) {
    const variantItems = variantList.querySelectorAll('.variations__item');
    variantItems.forEach(item => {
        item.style.marginRight = '-8px';
    });
}

$('[data-toggle="popover"]').popover({
    trigger: "manual",
    html: true,
    animation:false,
    boundary: 'window',
    placement: 'top',
    fallbackPlacement: ['top'],
    offset: '0, -8px'
}).on("mouseenter", function () {
    var _this = this;
    $(this).popover("show");
    $(".popover").on("mouseleave", function () {
        $(_this).popover('hide');
    });
}).on("mouseleave", function () {
    var _this = this;
    if (!$(".popover:hover").length) {
        $(_this).popover("hide");
    }
});

