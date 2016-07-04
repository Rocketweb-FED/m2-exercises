define([
    'jquery',
    'AnaRW_HomepageCarousel/js/owl/owl.carousel'
], function ($) {
    return function (config, element) {
        $(element).owlCarousel(config);
    }
});