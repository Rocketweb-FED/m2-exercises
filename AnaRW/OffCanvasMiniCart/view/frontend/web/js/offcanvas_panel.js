define([
    'jquery',
    'Magento_Ui/js/modal/modal'
],function($, modal){
    'use strict';

    $.widget('offcanvas.panel', {
        options: {
            toggleEvent: "click",
            buttons: [],
            modalClass: "offcanvas",
            content: "#minicart-content-wrapper",
            type: "slide"
        },
        _create: function () {
            var self = this;
            this._super();
        },

        _init: function () {
            this._super();
            this._assignControls()._listen();
        },

        _assignControls: function () {
            this.controls = {
                toggleBtn: $('[data-action="toggle-cart"]'),
                swipeArea: $('#minicart-content-wrapper')
            };

            return this;
        },

        _listen: function () {
            var controls = this.controls;
            var toggle = this.toggle;

            this._on(controls.toggleBtn, {'click': toggle});
            this._on(controls.swipeArea, {'swiperight': toggle});
        },

        toggle: function () {
            var widget = $(this.options.content).modal(this.options),
                state = widget.data('mage-modal').options.isOpen;

            if (state) {
                widget.modal('closeModal');
            } else {
                widget.modal('openModal');
            }
            return false;
        }
    });

    return $.offcanvas.panel;

});