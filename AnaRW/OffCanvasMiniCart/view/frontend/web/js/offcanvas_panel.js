define([
    'jquery',
    'Magento_Ui/js/modal/modal'
],function($, modal){
    'use strict';

    return function(config, el) {
        $(el).on(config.toggleEvent, function() {
            var widget = $(config.content).modal(config),
                state = widget.data('mage-modal').options.isOpen;

            if (state) {
                widget.modal('closeModal');
            } else {
                widget.modal('openModal');
            }
            return false;
        });
    };
});