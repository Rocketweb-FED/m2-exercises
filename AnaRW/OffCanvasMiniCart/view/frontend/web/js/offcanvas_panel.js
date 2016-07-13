define([
    'jquery',
    'Magento_Ui/js/modal/modalToggle'
],function($, modal){
    'use strict';

    var options = {
        "toggleEvent": "click",
        "buttons": [],
        "content": "#minicart-content-wrapper",
        "modalClass": "offcanvas",
        "type": "slide"
    },
        element = $('[data-action="toggle-cart"]');

    $(function () {
        modal(options, element);
    });
});