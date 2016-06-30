/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function ($, modal) {
        'use strict';
        return {
            modalWindow: null,

            /** Create popUp window for provided element */
            createPopUp: function(element) {
                this.modalWindow = element;
                var options = {
                    'type': 'popup',
                    'modalClass': 'minilogin-popup',
                    'responsive': true,
                    'innerScroll': true,
                    'trigger': '.authentication-link',
                    'buttons': []
                };
                modal(options, $(this.modalWindow));
            },

            /** Show login popup window */
            showModal: function() {
                $(this.modalWindow).modal('openModal');
            }
        }
    }
);
