/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint jquery:true*/

define([
    "jquery"
],function($) {
    'use strict';

    /*
     * Provides "Continium" effect for submenu
     * */
    $.widget('custom.offcanvasauth', $.ui.menu, {
        options: {
            responsive: false,
            expanded: false,
            delay: 300
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
                toggleBtn: $('.show-auth'),
                swipeArea: $('#authPopups')
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
            if ($('html').hasClass('auth-open')) {
                $('html').removeClass('auth-open');
                setTimeout(function () {
                    $('html').removeClass('auth-before-open');
                }, 300);
            } else {
                $('html').addClass('auth-before-open');
                setTimeout(function () {
                    $('html').addClass('auth-open');
                }, 42);
            }
        },

        close: function() {
            $('html').removeClass('auth-open');
            setTimeout(function () {
                $('html').removeClass('auth-before-open');
            }, 300);
        },

        open: function(){
            if (!$('html').hasClass('auth-open')) {
                $('html').addClass('auth-before-open');
                setTimeout(function () {
                    $('html').addClass('cart-open');
                }, 42);
            }
        }
    });


    return $.custom.offcanvasauth;

});

