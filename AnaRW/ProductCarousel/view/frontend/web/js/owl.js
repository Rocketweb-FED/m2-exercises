define([
    'jquery',
    'AnaRW_ProductCarousel/js/owl/owl.carousel'
], function ($) {
    return function () {
        $('.product-items').owlCarousel({
            "navigation": true,
            items: 5
        });
    }
});